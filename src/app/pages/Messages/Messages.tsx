import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowLeft, MessageSquare, SendHorizontal } from 'lucide-react'
import { useListings } from '@/app/hooks/useListings'
import { useAuth } from '@/hooks/useAuth'
import styles from './Messages.module.css'

interface Message {
    id: number
    senderId: string
    senderName: string
    text: string
    timestamp: number
}

interface Conversation {
    id: string
    seller: string
    sellerId: string
    buyerId: string
    buyerName: string
    itemId: number
    itemTitle: string
    updatedAt: number
    messages: Message[]
}

const GLOBAL_STORAGE_KEY = 'kampus_messages_global'

const STARTER_CONVERSATIONS: Conversation[] = []

function getConversationId(itemId: number, userA: string, userB: string) {
    const [first, second] = [userA, userB].sort()
    return `${itemId}::${first}::${second}`
}

function getUserKey(user: ReturnType<typeof useAuth>['user']) {
    return user?.email || user?.id || user?.name || 'unknown'
}

function loadAllConversations() {
    try {
        const raw = localStorage.getItem(GLOBAL_STORAGE_KEY)
        if (!raw) return STARTER_CONVERSATIONS
        const parsed = JSON.parse(raw) as Conversation[]
        if (!Array.isArray(parsed)) return STARTER_CONVERSATIONS
        return parsed
    } catch {
        return STARTER_CONVERSATIONS
    }
}

function formatTime(timestamp: number) {
    return new Date(timestamp).toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
    })
}

export default function Messages() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const { user } = useAuth()
    const { listings } = useListings()
    const currentUserKey = useMemo(() => getUserKey(user), [user])
    const [allConversations, setAllConversations] = useState<Conversation[]>(loadAllConversations)
    const [activeConversationId, setActiveConversationId] = useState<string>('')
    const [draft, setDraft] = useState('')

    const conversations = useMemo(
        () =>
            allConversations
                .filter(
                    (conversation) =>
                        conversation.buyerId === currentUserKey || conversation.sellerId === currentUserKey
                )
                .sort((a, b) => b.updatedAt - a.updatedAt),
        [allConversations, currentUserKey]
    )

    useEffect(() => {
        setAllConversations(loadAllConversations())
    }, [currentUserKey])

    useEffect(() => {
        setActiveConversationId((current) => {
            if (conversations.some((conversation) => conversation.id === current)) {
                return current
            }
            return conversations[0]?.id ?? ''
        })
        setDraft('')
    }, [conversations])

    useEffect(() => {
        try {
            localStorage.setItem(GLOBAL_STORAGE_KEY, JSON.stringify(allConversations))
        } catch {
            // Ignore storage write failures in private mode or limited environments.
        }
    }, [allConversations])

    useEffect(() => {
        if (!user) return

        const seller = searchParams.get('seller')
        const sellerId = searchParams.get('sellerId')
        const itemId = Number(searchParams.get('itemId'))
        const itemTitle = searchParams.get('itemTitle')

        if (!seller || Number.isNaN(itemId) || itemId <= 0 || !itemTitle) {
            return
        }

        const sellerParticipantId = sellerId || seller
        const buyerId = currentUserKey
        const conversationId = getConversationId(itemId, buyerId, sellerParticipantId)
        const autoMessage = `Hi! Is "${itemTitle}" still available?`

        setAllConversations((prev) => {
            const existing = prev.find((c) => c.id === conversationId)
            if (existing) return prev

            const now = Date.now()
            const starter: Conversation = {
                id: conversationId,
                seller,
                sellerId: sellerParticipantId,
                buyerId,
                buyerName: user.name,
                itemId,
                itemTitle,
                updatedAt: now,
                messages: [
                    {
                        id: now,
                        senderId: buyerId,
                        senderName: user.name,
                        text: autoMessage,
                        timestamp: now,
                    },
                ],
            }
            return [starter, ...prev]
        })

        setActiveConversationId(conversationId)
        navigate('/messages', { replace: true })
    }, [currentUserKey, navigate, searchParams, user])

    const activeConversation = conversations.find((c) => c.id === activeConversationId)
    const activeItem = activeConversation
        ? listings.find((listing) => listing.id === activeConversation.itemId)
        : undefined

    const counterpartLabel = activeConversation
        ? activeConversation.sellerId === currentUserKey
            ? activeConversation.buyerName
            : activeConversation.seller
        : ''

    const handleSend = () => {
        const nextText = draft.trim()
        if (!nextText || !activeConversationId) return

        setAllConversations((prev) =>
            prev.map((conversation) => {
                if (conversation.id !== activeConversationId) return conversation
                const now = Date.now()
                return {
                    ...conversation,
                    updatedAt: now,
                    messages: [
                        ...conversation.messages,
                        {
                            id: now,
                            senderId: currentUserKey,
                            senderName: user?.name || 'Student',
                            text: nextText,
                            timestamp: now,
                        },
                    ],
                }
            })
        )
        setDraft('')
    }

    return (
        <div className={styles.page}>
            <div className={styles.topBar}>
                <Link to="/" className={styles.backBtn}>
                    <ArrowLeft size={16} />
                    Back to listings
                </Link>
            </div>

            <div className={styles.shell}>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarHeader}>
                        <MessageSquare size={17} />
                        <h1>Messages</h1>
                    </div>

                    {conversations.length === 0 ? (
                        <p className={styles.emptyState}>No conversations yet.</p>
                    ) : (
                        <div className={styles.threadList}>
                            {conversations.map((conversation) => {
                                const lastMessage = conversation.messages[conversation.messages.length - 1]
                                const active = conversation.id === activeConversationId
                                const counterpart =
                                    conversation.sellerId === currentUserKey
                                        ? conversation.buyerName
                                        : conversation.seller

                                return (
                                    <button
                                        key={conversation.id}
                                        className={`${styles.threadButton} ${active ? styles.threadButtonActive : ''}`}
                                        onClick={() => setActiveConversationId(conversation.id)}
                                    >
                                        <p className={styles.threadSeller}>{counterpart}</p>
                                        <p className={styles.threadItem}>{conversation.itemTitle}</p>
                                        <p className={styles.threadPreview}>{lastMessage?.text || 'Start the chat'}</p>
                                    </button>
                                )
                            })}
                        </div>
                    )}
                </aside>

                <section className={styles.chatPanel}>
                    {activeConversation ? (
                        <>
                            <header className={styles.chatHeader}>
                                <p className={styles.chatSeller}>{counterpartLabel}</p>
                                <p className={styles.chatItem}>{activeConversation.itemTitle}</p>
                            </header>

                            <div className={styles.itemCardWrap}>
                                <Link to={`/item/${activeConversation.itemId}`} className={styles.itemCard}>
                                    <div className={styles.itemCardImageWrap}>
                                        {activeItem?.image ? (
                                            <img
                                                src={activeItem.image}
                                                alt={activeConversation.itemTitle}
                                                className={styles.itemCardImage}
                                            />
                                        ) : (
                                            <div className={styles.itemCardImageFallback}>Listing</div>
                                        )}
                                    </div>
                                    <div className={styles.itemCardBody}>
                                        <p className={styles.itemCardLabel}>Listing</p>
                                        <p className={styles.itemCardTitle}>{activeConversation.itemTitle}</p>
                                        {activeItem?.price !== undefined && (
                                            <p className={styles.itemCardPrice}>
                                                ₱{activeItem.price.toLocaleString('en-PH')}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            </div>

                            <div className={styles.messagesArea}>
                                {activeConversation.messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`${styles.messageRow} ${message.senderId === currentUserKey
                                                ? styles.messageMine
                                                : styles.messageSeller
                                            }`}
                                    >
                                        <div className={styles.messageBubble}>
                                            <p>{message.text}</p>
                                            <span>{formatTime(message.timestamp)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.composer}>
                                <input
                                    value={draft}
                                    onChange={(e) => setDraft(e.target.value)}
                                    placeholder="Type your message..."
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') handleSend()
                                    }}
                                />
                                <button onClick={handleSend} aria-label="Send message">
                                    <SendHorizontal size={16} />
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className={styles.placeholder}>
                            Open a conversation from an item to start messaging a seller.
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}
