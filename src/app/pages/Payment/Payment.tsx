import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, CreditCard, QrCode, Wallet } from 'lucide-react'
import qrPlaceholder from '@/assets/qrph-placeholder.svg'
import styles from './Payment.module.css'

type PaymentMethod = 'cash' | 'kwallet' | 'card' | 'qrph'

function formatMoney(amount: number) {
    return `₱${amount.toLocaleString('en-PH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`
}

const PAYMENT_METHODS: Array<{
    id: PaymentMethod
    label: string
    subtitle: string
    icon: typeof Wallet
}> = [
        {
            id: 'cash',
            label: 'Cash',
            subtitle: 'Pay in person during meetup',
            icon: Wallet,
        },
        {
            id: 'kwallet',
            label: 'K-Wallet',
            subtitle: 'Use your Kampus wallet balance',
            icon: Wallet,
        },
        {
            id: 'card',
            label: 'Debit / Credit Card',
            subtitle: 'Visa, Mastercard, and more',
            icon: CreditCard,
        },
        {
            id: 'qrph',
            label: 'QRPH',
            subtitle: 'Scan and pay via local e-wallet app',
            icon: QrCode,
        },
    ]

export default function Payment() {
    const [searchParams] = useSearchParams()
    const itemTitle = searchParams.get('itemTitle') || 'Listing'
    const seller = searchParams.get('seller') || 'Seller'
    const amountRaw = Number(searchParams.get('amount'))
    const amount = Number.isFinite(amountRaw) && amountRaw > 0 ? amountRaw : 0

    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('cash')
    const [cardType, setCardType] = useState('Visa')
    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardExpiry, setCardExpiry] = useState('')
    const [cardCvv, setCardCvv] = useState('')

    const selectedLabel = useMemo(
        () => PAYMENT_METHODS.find((method) => method.id === selectedMethod)?.label || 'Cash',
        [selectedMethod]
    )

    return (
        <div className={styles.page}>
            <div className={styles.topBar}>
                <Link to="/messages" className={styles.backBtn}>
                    <ArrowLeft size={16} />
                    Back to messages
                </Link>
            </div>

            <section className={styles.card}>
                <header className={styles.header}>
                    <p className={styles.eyebrow}>Payment</p>
                    <h1>Choose payment method</h1>
                </header>

                <div className={styles.summary}>
                    <p>
                        <span>Item</span>
                        <strong>{itemTitle}</strong>
                    </p>
                    <p>
                        <span>Seller</span>
                        <strong>{seller}</strong>
                    </p>
                    <p>
                        <span>Total Amount</span>
                        <strong>{amount > 0 ? formatMoney(amount) : 'Not specified'}</strong>
                    </p>
                </div>

                <div className={styles.methods}>
                    {PAYMENT_METHODS.map((method) => {
                        const Icon = method.icon
                        const isActive = selectedMethod === method.id
                        return (
                            <button
                                type="button"
                                key={method.id}
                                className={`${styles.methodBtn} ${isActive ? styles.methodBtnActive : ''}`}
                                onClick={() => setSelectedMethod(method.id)}
                            >
                                <span className={styles.methodIcon}>
                                    <Icon size={18} />
                                </span>
                                <span className={styles.methodText}>
                                    <strong>{method.label}</strong>
                                    <small>{method.subtitle}</small>
                                </span>
                            </button>
                        )
                    })}
                </div>

                {selectedMethod === 'card' && (
                    <div className={styles.dropdownPanel}>
                        <p className={styles.dropdownTitle}>Card details</p>
                        <div className={styles.fieldGrid}>
                            <label className={styles.field}>
                                Card type
                                <select value={cardType} onChange={(event) => setCardType(event.target.value)}>
                                    <option value="Visa">Visa</option>
                                    <option value="Mastercard">Mastercard</option>
                                    <option value="JCB">JCB</option>
                                    <option value="AMEX">American Express</option>
                                </select>
                            </label>
                            <label className={styles.field}>
                                Name on card
                                <input
                                    type="text"
                                    value={cardName}
                                    onChange={(event) => setCardName(event.target.value)}
                                    placeholder="Juan Dela Cruz"
                                />
                            </label>
                            <label className={styles.fieldWide}>
                                Card number
                                <input
                                    type="text"
                                    value={cardNumber}
                                    onChange={(event) => setCardNumber(event.target.value)}
                                    placeholder="1234 5678 9012 3456"
                                />
                            </label>
                            <label className={styles.field}>
                                Expiry
                                <input
                                    type="text"
                                    value={cardExpiry}
                                    onChange={(event) => setCardExpiry(event.target.value)}
                                    placeholder="MM/YY"
                                />
                            </label>
                            <label className={styles.field}>
                                CVV
                                <input
                                    type="password"
                                    value={cardCvv}
                                    onChange={(event) => setCardCvv(event.target.value)}
                                    placeholder="123"
                                />
                            </label>
                        </div>
                    </div>
                )}

                {selectedMethod === 'qrph' && (
                    <div className={styles.dropdownPanel}>
                        <p className={styles.dropdownTitle}>QRPH placeholder</p>
                        <img src={qrPlaceholder} alt="QRPH placeholder" className={styles.qrImage} />
                    </div>
                )}

                <div className={styles.footerNote}>
                    Selected method: <strong>{selectedLabel}</strong>
                </div>

                <div className={styles.actionRow}>
                    <button type="button" className={styles.confirmBtn}>
                        Confirm
                    </button>
                </div>
            </section>
        </div>
    )
}
