import React, { useState, useRef, useEffect } from "react";

interface TerminalProps {
  interactive?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ interactive = false }) => {
  const [history, setHistory] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentUser, setCurrentUser] = useState("guest");
  const [awaitingPassword, setAwaitingPassword] = useState(false);
  const [pendingCommand, setPendingCommand] = useState<string[]>([]);
  const [loginTime, setLoginTime] = useState('');
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const now = new Date();
    const timeString = now.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }) + ' on ttys000';
    setLoginTime(timeString);
  }, []);

  // File system simulation
  const fileSystem = {
    "note.txt":
      "Welcome to the CTF! Look for hidden files. The admin password might be around...",
    ".hidden": "Admin password: admin123",
    system: {
      "flag.txt": "CTF{congratulations_you_found_the_flag}",
      "config.conf": "admin_access=true",
    },
  };

  const terminalCommands: Record<string, (args: string[]) => string[]> = {
    ls: (args) => {
      const showHidden =
        args.includes("-a") || args.includes("-la") || args.includes("-al");
      const path = args.find((arg) => !arg.startsWith("-")) || "";

      if (path === "system/" || path === "system") {
        if (currentUser !== "admin") {
          return ["ls: system/: Permission denied"];
        }
        return ["flag.txt", "config.conf"];
      }

      const files = ["note.txt"];
      if (showHidden) {
        files.push(".hidden");
      }
      if (currentUser === "admin") {
        files.push("system/");
      }
      return files;
    },
    cat: (args) => {
      if (args.length === 0) return ["cat: missing file operand"];
      const filename = args[0];

      if (filename === "system/flag.txt") {
        if (currentUser !== "admin") {
          return ["cat: system/flag.txt: Permission denied"];
        }
        return [
          fileSystem.system["flag.txt"],
          "",
          "🎉 CONGRATULATIONS! 🎉",
          "You successfully completed the CTF challenge!",
          "You escalated from guest to admin and found the flag.",
          "",
          "Well done, hacker! 🏆",
        ];
      }

      if (filename in fileSystem) {
        return [fileSystem[filename as keyof typeof fileSystem] as string];
      }

      return [`cat: ${filename}: No such file or directory`];
    },
    whoami: () => [currentUser],
    find: (args) => {
      if (args.length === 0) return ["find: missing argument"];
      const query = args[0];

      if (query === "flag" || query === "*flag*") {
        if (currentUser === "admin") {
          return ["system/flag.txt"];
        } else {
          return ["find: permission denied for system directory"];
        }
      }

      return [`find: '${query}' not found`];
    },
    base64: (args) => {
      if (args.length === 0) return ["base64: missing input"];
      const option = args[0];
      const input = args.slice(1).join(" ");

      if (option === "-d" || option === "--decode") {
        try {
          const decoded = atob(input);
          return [decoded];
        } catch (e) {
          return ["base64: invalid input"];
        }
      }

      return ["Usage: base64 -d <encoded_string>"];
    },
    su: (args) => {
      if (args.length === 0) return ["su: missing username"];
      const username = args[0];

      if (username === "admin") {
        setAwaitingPassword(true);
        setPendingCommand(["su", username]);
        return []; // Don't return "Password:" here, let the prompt handle it
      }

      return [`su: user ${username} does not exist`];
    },
    clear: () => {
      setHistory([]);
      return [];
    },
    help: () => [
      "Available commands:",
      "  help     - Show this help message",
      "  hint     - Get a helpful hint for the challenge",
      "  whoami   - Display current user",
      "  ls       - List files (try -a for hidden files)",
      "  cat      - Display file contents",
      "  find     - Search for files",
      "  base64   - Encode/decode base64 (use -d to decode)",
      "  su       - Switch user",
      "  clear    - Clear terminal screen",
      "",
      "Goal: Find the hidden flag by escalating privileges!",
    ],
    hint: () => {
      if (currentUser === "guest") {
        return [
          "💡 Hint: Start by exploring the current directory.",
          'Try "ls -a" to see all files, including hidden ones.',
          "Look for clues in the files you find!",
        ];
      } else if (currentUser === "admin") {
        return [
          "💡 Hint: You have admin access now!",
          'Try "find flag" or explore the system directory.',
          "The flag should be accessible to you now.",
        ];
      }
      return ["💡 Hint: You're on the right track! Keep exploring."];
    },
  };

  const executeCommand = (input: string): string[] => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return [];

    // Handle password input for su command
    if (awaitingPassword && pendingCommand[0] === "su") {
      setAwaitingPassword(false);
      const username = pendingCommand[1];
      const password = trimmedInput;

      if (username === "admin" && password === "admin123") {
        setCurrentUser("admin");
        setPendingCommand([]);
        return [`Switched to user: ${username}`];
      } else {
        setPendingCommand([]);
        return ["su: Authentication failure"];
      }
    }

    const [command, ...args] = trimmedInput.split(" ");

    if (command in terminalCommands) {
      return terminalCommands[command](args);
    }

    return [`${command}: command not found`];
  };

  const handleInputSubmit = () => {
    if (!currentInput.trim()) return;

    // Handle password input for su command
    if (awaitingPassword && pendingCommand[0] === "su") {
      setAwaitingPassword(false);
      const username = pendingCommand[1];
      const password = currentInput.trim();

      // Show the masked password input in history
      setHistory((prev) => [...prev, "*".repeat(currentInput.length)]);

      if (username === "admin" && password === "admin123") {
        setCurrentUser("admin");
        setPendingCommand([]);
        const output = [
          `Switched to user: ${username}`,
          "🔓 Admin access granted!",
        ];
        setHistory((prev) => [...prev, ...output]);
      } else {
        setPendingCommand([]);
        const output = ["su: Authentication failure"];
        setHistory((prev) => [...prev, ...output]);
      }

      setCurrentInput("");
      return;
    }

    const prompt = `${currentUser}@ctf:~$`;

    // Add command to history with proper formatting
    setHistory((prev) => [...prev, `${prompt} ${currentInput}`]);
    setCommandHistory((prev) => [...prev, currentInput]);
    setHistoryIndex(-1);

    const output = executeCommand(currentInput);
    if (output.length > 0) {
      setHistory((prev) => [...prev, ...output]);
    }

    setCurrentInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleInputSubmit();
    } else if (e.key === "ArrowUp" && !awaitingPassword) {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown" && !awaitingPassword) {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (!interactive) {
    return (
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="btn btn-close"></div>
            <div className="btn btn-minimize"></div>
            <div className="btn btn-maximize"></div>
          </div>
          <div className="terminal-title">terminal</div>
        </div>
        <div className="terminal-body">
          <div className="terminal-text">
            <span className="glow">guest@portfolio:~$</span> whoami
            <br />
            guest
            <br />
            <span className="glow">guest@portfolio:~$</span> ls -la
            <br />
            total 42
            <br />
            drwxr-xr-x 7 guest guest 4096 Jan 15 10:30 .<br />
            drwxr-xr-x 3 root root 4096 Jan 15 10:30 ..
            <br />
            -rw-r--r-- 1 guest guest 220 Jan 15 10:30 .profile
            <br />
            drwxr-xr-x 2 guest guest 4096 Jan 15 10:30 projects
            <br />
            drwxr-xr-x 2 guest guest 4096 Jan 15 10:30 skills
            <br />
            <span className="glow">guest@portfolio:~$</span> cat .profile
            <br />
            # Welcome to my portfolio!
            <br />
            # Full-stack developer passionate about
            <br />
            # clean code and innovative solutions
            <br />
            <span className="glow">guest@portfolio:~$</span>{" "}
            <span className="cursor">█</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="btn btn-close"></div>
          <div className="btn btn-minimize"></div>
          <div className="btn btn-maximize"></div>
        </div>
        <div className="terminal-title">terminal</div>
      </div>
      <div className="terminal-body" ref={terminalBodyRef}>
        <div className="terminal-content">
          <div className="terminal-welcome">
            Last login: {loginTime}
            <br />
            <div className="ctf-intro">
              <strong>CTF CHALLENGE:</strong> Find the hidden flag!
              <br />
              Goal: Escalate your privileges and capture the flag.
              <br />
              Type "help" for commands or "hint" if you get stuck.
            </div>
          </div>

          {history.map((line, index) => {
            // Determine if this line is a command prompt, output, or error
            const isCommand = line.includes("@ctf:~$");
            const isPasswordInput = line.match(/^\*+$/); // Lines that are just asterisks
            const isError =
              line.includes("not found") ||
              line.includes("Permission denied") ||
              line.includes("missing") ||
              line.includes("failure") ||
              line.includes("invalid") ||
              line.includes("does not exist");
            const isSuccess =
              line.includes("🎉") ||
              line.includes("🔓") ||
              line.includes("CONGRATULATIONS");

            let className = "terminal-line ";
            if (isCommand || isPasswordInput) {
              className += "command";
            } else if (isError) {
              className += "error";
            } else if (isSuccess) {
              className += "success";
            } else {
              className += "output";
            }

            return (
              <div key={index} className={className}>
                {line}
              </div>
            );
          })}

          <div className="terminal-input-line">
            <span
              className={`terminal-prompt ${currentUser === "admin" ? "admin" : ""}`}
            >
              {awaitingPassword ? "Password:" : `${currentUser}@ctf:~$`}
            </span>
            <div className="terminal-input-container">
              <span className="terminal-input-text">
                {awaitingPassword
                  ? "*".repeat(currentInput.length)
                  : currentInput}
              </span>
              <span className="terminal-cursor">█</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input-hidden"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
