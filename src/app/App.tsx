import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CategoryBar } from "./components/CategoryBar";
import { ProductGrid } from "./components/ProductGrid";
import { AuthModal } from "./components/AuthModal";
import { Footer } from "./components/Footer";
import { useModal } from "@/hooks/useModal";
import { PRODUCTS } from "@/data/products";
import ItemView from "./pages/ItemView/ItemView";
import Profile from "./pages/Profile/Profile";
import CreateListing from "./pages/CreateListing/CreateListing";
import Messages from "./pages/Messages/Messages";
import Payment from "./pages/Payment/Payment";
import Proof from "./pages/Payment/Proof";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { ListingsProvider, useListings } from "./hooks/useListings";
import { RequireAuth } from "./components/RequireAuth";
import type { ModalPanel } from "@/hooks/useModal";
import { sortProducts } from "@/lib/sort";
import type { SortKey } from "@/lib/sort";
import { seedDemoBoosts } from "@/lib/seedBoosts";
import { BoostedSection } from "./components/BoostedSection";

// ── Home page ─────────────────────────────────────────────

function Home({
  onOpenModal,
}: {
  onOpenModal: (p: ModalPanel, email?: string) => void;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "All",
  );
  const searchQuery = searchParams.get("search") || "";
  const { isLoggedIn } = useAuth();
  const [landingEmail, setLandingEmail] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("date-newest");

  const handleContinue = () => {
    const email = landingEmail.trim();
    if (!email) return;
    try {
      const raw = localStorage.getItem("mock_accounts");
      const accounts = raw ? JSON.parse(raw) : [];
      const found = accounts.find((a: any) => a.email === email);
      if (found) {
        onOpenModal("signin", email);
      } else {
        onOpenModal("signup", email);
      }
    } catch {
      onOpenModal("signup", email);
    }
  };

  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "All");
  }, [searchParams]);

  const handleCategorySelect = (label: string) => {
    setActiveCategory(label);
    const next = new URLSearchParams(searchParams);
    if (label === "All") {
      next.delete("category");
    } else {
      next.set("category", label);
    }
    setSearchParams(next);
  };

  const { listings } = useListings();
  const byId = new Map<number, (typeof PRODUCTS)[number]>();
  for (const p of PRODUCTS) byId.set(p.id, p);
  for (const p of listings) byId.set(p.id, p);
  let allProducts = Array.from(byId.values());

  if (searchQuery) {
    allProducts = allProducts.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  } else {
    if (activeCategory !== "All") {
      allProducts = allProducts.filter((p) => p.category === activeCategory);
    }
  }

  // Boosted items no longer get pinned here — the dedicated Boosted
  // Listings section already covers that. BoostedSection ranks its own
  // items via the heap in splitByBoost, so it must receive the
  // unsorted `allProducts`, not a sortKey-dependent copy — otherwise
  // the Recent Listings sort leaks into Boosted Listings' order.
  const sortedProducts = sortProducts(allProducts, sortKey);

  // ── Logged-out: Hero + email gate ──
  if (!isLoggedIn) {
    return (
      <>
        <Hero />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "32px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 560,
              width: "100%",
              background: "var(--card-bg, #fff)",
              padding: "28px 24px",
              borderRadius: 10,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                margin: "0 0 6px",
                color: "var(--text-dark)",
                fontSize: "1.25rem",
              }}
            >
              Start browsing
            </h2>
            <p
              style={{
                margin: "0 0 16px",
                color: "var(--text-muted, #666)",
                fontSize: "0.95rem",
              }}
            >
              Enter your CIIT email to register or log in.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                aria-label="CIIT email"
                value={landingEmail}
                onChange={(e) => setLandingEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleContinue()}
                placeholder="email@ciit.edu.ph"
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: 6,
                  border: "1px solid rgba(0,0,0,0.15)",
                  fontSize: "1rem",
                  background: "var(--gray-100, #f5f5f5)",
                  color: "var(--text-dark)",
                  outline: "none",
                }}
              />
              <button
                onClick={handleContinue}
                style={{
                  padding: "10px 20px",
                  borderRadius: 6,
                  border: "none",
                  background: "#0f172a",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── Logged-in: full marketplace ──
  return (
    <>
      <Hero />
      <CategoryBar active={activeCategory} onSelect={handleCategorySelect} />
      <BoostedSection products={allProducts} />
      <ProductGrid
        products={sortedProducts}
        sortKey={sortKey}
        onSortChange={setSortKey}
      />
    </>
  );
}

// ── App layout ────────────────────────────────────────────
function AppLayout() {
  const { isLoggedIn } = useAuth();
  const modal = useModal();

  return (
    <>
      {/* Navbar always visible */}
      <Navbar onOpenModal={modal.open} />

      <Routes>
        <Route path="/" element={<Home onOpenModal={modal.open} />} />
        <Route path="/item/:id" element={<ItemView />} />
        <Route
          path="/profile"
          element={
            <RequireAuth onUnauth={() => modal.open("signin")}>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/profile/:profileKey"
          element={
            <RequireAuth onUnauth={() => modal.open("signin")}>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/create-listing"
          element={
            <RequireAuth onUnauth={() => modal.open("signin")}>
              <CreateListing />
            </RequireAuth>
          }
        />
        <Route
          path="/messages"
          element={
            <RequireAuth onUnauth={() => modal.open("signin")}>
              <Messages />
            </RequireAuth>
          }
        />
        <Route
          path="/payment"
          element={
            <RequireAuth onUnauth={() => modal.open("signin")}>
              <Payment />
            </RequireAuth>
          }
        />
        <Route
          path="/payment/proof"
          element={
            <RequireAuth onUnauth={() => modal.open("signin")}>
              <Proof />
            </RequireAuth>
          }
        />
      </Routes>

      {/* Footer only for logged-in users */}
      {isLoggedIn && <Footer />}

      <AuthModal
        isOpen={modal.isOpen}
        panel={modal.panel}
        onClose={modal.close}
        onSwitchPanel={modal.open}
        initialEmail={modal.initialEmail}
      />
    </>
  );
}

// ── Root ──────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    try {
      const raw = localStorage.getItem("kampus_dark");
      const enabled = raw === "true";
      if (enabled) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch {}

    seedDemoBoosts();
  }, []);

  return (
    <AuthProvider>
      <ListingsProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </ListingsProvider>
    </AuthProvider>
  );
}
