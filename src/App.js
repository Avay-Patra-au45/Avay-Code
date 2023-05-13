import "./styles.css";
import { useState } from "react";

const options = ["cricket", "football", "hockey"];
const days = ["weekday", "weekend"];

export default function App() {
  const [game, setGame] = useState();
  const [day, setDay] = useState();

  return (
    <div className="App">
      <h1>WATCH GAME</h1>
      {options.map((currVal, index) => (
        <div key={`game-${index}`}>
          <>
            <input
              type="radio"
              id={currVal}
              name="days"
              value={currVal}
              onChange={(e) => setGame(e.target.value)}
            />
            <label htmlFor={currVal}>{currVal}</label>
          </>
        </div>
      ))}
      <h2>you will play</h2>

      {days.map((currVal1, index) => (
        <div key={`day-${index}`}>
          <>
            <input
              type="radio"
              id="{currVal1}"
              name="options"
              value={currVal1}
              onChange={(e) => setDay(e.target.value)}
            />
            <label htmlFor="{currVal1}">{currVal1}</label>
          </>
        </div>
      ))}
      <h2>
        {game} play in this {day}
      </h2>
    </div>
  );
}
