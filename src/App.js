import { useState } from "react";
import "./App.css";

function App() {
  const [accepted, setAccepted] = useState(false);
  const [refused, setRefused] = useState(false);
  const [yesSize, setYesSize] = useState(20);
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState({ top: "60%", left: "55%" });

  const messages = [
    "Nice try 😏",
    "Dinner is destiny 🍝",
    "That button seems broken 🤔",
    "You almost got it 😂",
    "The universe says YES ✨",
    "Why are you running from dinner 😢"
  ];

  const moveNo = () => {
    const newTop = Math.random() * 80;
    const newLeft = Math.random() * 80;

    setPosition({
      top: `${newTop}%`,
      left: `${newLeft}%`
    });

    setYesSize(yesSize + 6);
    setRefused(true);

    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    setMessage(randomMessage);
  };

  const handleYes = () => {
    setAccepted(true);
  };

  if (accepted) {
    return (
      <div className="success">
        <h1>🍝 Dinner it is!</h1>
        <p>I knew you'd say yes 😄</p>

        <img
          src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
          alt="happy"
          width="260"
        />
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Will you go to dinner with me this weekend? 🍝😊</h2>

      <div style={{ marginTop: "50px", fontSize: "22px" }}>
        <label
          className="yes-option"
          style={{
            fontSize: yesSize
          }}
        >
          <input
            type="checkbox"
            onChange={handleYes}
            style={{
              transform: `scale(${yesSize / 20})`,
              marginRight: "10px"
            }}
          />
          Yes 😄
        </label>

        <label
          className="no-option"
          onMouseEnter={moveNo}
          style={{
            top: position.top,
            left: position.left
          }}
        >
          <input type="checkbox" />
          No 😢
        </label>
      </div>

      {message && <div className="message">{message}</div>}

      {refused && <div className="cry">😭💔</div>}

      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 4 + Math.random() * 6 + "s"
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}

export default App;