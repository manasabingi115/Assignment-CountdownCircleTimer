import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function App() {
  const [select, setSelect] = React.useState(10);
  const [timer, setTimer] = React.useState(0);

  const SetlectReset = () => {
    let options = [10, 20, 30, 40, 50, 60];
    return (
      <div style={{ display: "flex" }}>
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          {options.map((opt) => (
            <option value={opt} key={opt}>
              {opt + " sec"}
            </option>
          ))}
        </select>
        <button
          className="reset"
          onClick={() => setTimer((prevTimer) => prevTimer + 1)}
        >
          Reset
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>
        <a
          href="https://www.reactlabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Labs
        </a>
        <br />
        ReactJS Assignment
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={timer}
          isPlaying
          duration={select}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [false, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
        <br />
        <br />
        <SetlectReset />
        <br />
        <br />
        <h3>Can you get this reset button to work?</h3>
        <h3>
          The reset button should reset as per the time selected in the dropdown
        </h3>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
