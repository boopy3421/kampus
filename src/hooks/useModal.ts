import { useState } from 'react'

export type ModalPanel = 'signin' | 'signup' | 'sell' | null

export function useModal() {
  const [panel, setPanel] = useState<ModalPanel>(null)

  const open  = (p: ModalPanel) => setPanel(p)
  const close = ()               => setPanel(null)
  const isOpen = panel !== null

  return { panel, open, close, isOpen, setPanel }
}
