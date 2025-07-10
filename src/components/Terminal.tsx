interface TerminalProps {
  text: string
  isTyping: boolean
  title?: string
}

export const Terminal = ({ text, isTyping, title = "spken@matias:~" }: TerminalProps) => {
  return (
    <div className="terminal-container">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn btn-close"></span>
            <span className="btn btn-minimize"></span>
            <span className="btn btn-maximize"></span>
          </div>
          <span className="terminal-title">{title}</span>
        </div>
        <div className="terminal-body">
          <pre className="terminal-text">{text}</pre>
          {isTyping && <span className="cursor">_</span>}
        </div>
      </div>
    </div>
  )
}
