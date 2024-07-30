import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [text, setText] = useState("Coming Soon");
  const [animator, setAnimator] = useState(true);

  let quotes = [
    "Coming Soon",
    "just wait for a while",
    "why so anxious!!!",
    "come back again....",
    "go... away",
    "We’re busy here plotting world domination. Check back later!",
    "Just a little longer—unless you have a time machine, then use that.",
    "In the meantime, go find a snack. We’ll still be here when you get back!",
  ];

  function randomText() {
    let gen = Math.floor(Math.random() * quotes.length);

    const element = document.querySelector("#titleHead");
    if (animator) {
      element.classList.toggle("animateHeader2");
      element.classList.toggle("animateHeader1");
      setAnimator(false);
    } else {
      element.classList.toggle("animateHeader1");
      element.classList.toggle("animateHeader2");
      setAnimator(true);
    }
    return quotes[gen];
  }

  return (
    <>
      <div id="titleHolder">
        <h1 id="titleHead" className="animateHeader1">
          {text}
        </h1>
        <button onClick={() => setText(randomText())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
