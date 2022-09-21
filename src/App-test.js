import { useState } from "react";
import "./App.css";
import Displayer from "./Displayer";

function App() {
  const [value, setValue] = useState(5);

  return (
    <div id="main-container">
      <header>Counter</header>
      <div>
        <Counter initialCount={0} />
      </div>
      <div>
        <Counter initialCount={0} />
      </div>

      <div>
        <Counter initialCount={0} />
      </div>

      <div>
        <Displayer count={value} color="#00FF00" />
        <Displayer count={value} color="#00FFFF" />
        <Displayer count={value} color="#FFFF00" />
        <button
          onClick={function () {
            setValue(value + 1);
          }}
        >
          Displayer
        </button>
      </div>
      <div>
        <DoubleCounter initialCount={0} />
      </div>
    </div>
  );
}

export default App;

function Counter({ initialCount }) {
  /* const {number} = props */
  const [value, setValue] = useState(initialCount);
  /*[value,setValue] = _S[0] */
  return (
    <div>
      <button
        onClick={function CanBeAnything() {
          console.log(initialCount);
          setValue(value + 1);
        }}
      >
        Count
      </button>
      {value}
    </div>
  );
}

function House() {
  return <p>🏠</p>;
}

function DoubleCounter({ initialCount }) {
  const [value, setValue] = useState(initialCount);

  return (
    <div>
      <button
        onClick={function () {
          console.log(initialCount);

          setValue(value * 2);
        }}
      >
        Doubles the number
      </button>
      <button
        onClick={function () {
          setValue(value + 2);
        }}
      >
        + 2
      </button>
      {value}
    </div>
  );

  /* 
  This displays a number everytime
  There are 2 buttons in this component
  The 1st button doubles the number
  The second button increases the number by 2



   */
}
