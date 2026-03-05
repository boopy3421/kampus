import { useState } from 'react'

const CIIT_DOMAIN = '@ciit.edu.ph'

type ValidationState = 'idle' | 'valid' | 'invalid'

export function useEmailValidation() {
  const [state, setState] = useState<ValidationState>('idle')

  const validate = (value: string) => {
    if (!value) {
      setState('idle')
      return
    }
    const isValid = value.toLowerCase().endsWith(CIIT_DOMAIN) && value.length > CIIT_DOMAIN.length
    const isPartial = value.includes('@') && !isValid
    setState(isPartial ? 'invalid' : isValid ? 'valid' : 'idle')
  }

  const isCIITEmail = (value: string) =>
    value.toLowerCase().endsWith(CIIT_DOMAIN) && value.length > CIIT_DOMAIN.length

  const reset = () => setState('idle')

  return { state, validate, isCIITEmail, reset }
}
