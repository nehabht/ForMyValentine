import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "What?",
  "Are you sure?",
  "Really sure?",
  "But Bimski??",
  "Plese don't do this to me",
  "But are you sure?",
  "My heart, pweesee",
  "Man, whyy??",
  "Bro",
  "Give it another thought",
  "Minski",
  "Last chance",
  "Are you sure??",
];

function App() {
  const [noCount, SetNoCount] = useState(0);
  const [yesPressed, SetYesPressed] = useState(false);
  const yesButtonSize = noCount * 24 + 18;

  function handleNoClick() {
    SetNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            src="https://media1.tenor.com/m/sCJ34zyff-UAAAAC/mochi-cat.gif"
            alt="kissing bears"
          />
          <div className="text">
            Yay! I'm so happy! I love you so much and you are the best!!
          </div>
        </>
      ) : (
        <>
          <img
            src="https://media.tenor.com/7EKMYRWPcBkAAAAi/peach-goma.gif"
            alt="mochi bears plese"
          />

          <div className="question">Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => SetYesPressed(true)}
            >
              Yes
            </button>

            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
