import { useState, useCallback } from 'react'

export function useCopyToClipboard(resetDuration = 2000) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(
    (text) => {
      if (!navigator?.clipboard) {
        return false
      }

      navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), resetDuration)
      })
      return true
    },
    [resetDuration],
  )

  return { copied, copy }
}

