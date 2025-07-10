import { useState, useEffect } from 'react'

export const useTerminalEffect = (commands: string[], delay: number = 1500) => {
  const [terminalText, setTerminalText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    let currentText = ''
    const interval = setInterval(() => {
      if (currentIndex < commands.length) {
        currentText += commands[currentIndex] + '\n'
        setTerminalText(currentText)
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, delay)

    return () => clearInterval(interval)
  }, [commands, delay])

  return { terminalText, isTyping }
}
