import { useState } from "react";

export type ModalPanel = "signin" | "signup" | "sell" | null;

export function useModal() {
  const [panel, setPanel] = useState<ModalPanel>(null);
  const [initialEmail, setInitialEmail] = useState<string>("");

  const open = (p: ModalPanel, email?: string) => {
    setPanel(p);
    setInitialEmail(email ?? "");
  };

  const close = () => {
    setPanel(null);
    setInitialEmail("");
  };

  const isOpen = panel !== null;

  return { panel, open, close, isOpen, setPanel, initialEmail };
}
