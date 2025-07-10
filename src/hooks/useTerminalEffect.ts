import { useState, useEffect } from 'react'

export const useTerminalEffect = (commands: string[], typingSpeed: number = 50, lineDelay: number = 800) => {
  const [terminalText, setTerminalText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentLineIndex >= commands.length) {
      setIsTyping(false)
      return
    }

    const currentLine = commands[currentLineIndex]
    
    if (currentCharIndex <= currentLine.length) {
      const timer = setTimeout(() => {
        const displayText = commands
          .slice(0, currentLineIndex)
          .join('\n') + 
          (currentLineIndex > 0 ? '\n' : '') + 
          currentLine.slice(0, currentCharIndex)
        
        setTerminalText(displayText)
        setCurrentCharIndex(prev => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timer)
    } else {
      // Finished typing current line, move to next line after delay
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }, lineDelay)

      return () => clearTimeout(timer)
    }
  }, [commands, currentLineIndex, currentCharIndex, typingSpeed, lineDelay])

  return { terminalText, isTyping, currentLineIndex, totalLines: commands.length }
}
