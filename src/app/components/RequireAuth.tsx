import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

interface RequireAuthProps {
    children: JSX.Element
    onUnauth: () => void
}

export function RequireAuth({ children, onUnauth }: RequireAuthProps) {
    const { isLoggedIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const initialMount = useRef(true)

    useEffect(() => {
        if (!isLoggedIn) {
            if (initialMount.current) {
                onUnauth()
            }
            // return user to previous page if there is one, otherwise go home
            if (location.pathname !== '/') {
                navigate(-1)
            } else {
                navigate('/')
            }
            initialMount.current = false
        }
    }, [isLoggedIn, location.pathname, navigate, onUnauth])

    if (!isLoggedIn) return null
    return children
}
