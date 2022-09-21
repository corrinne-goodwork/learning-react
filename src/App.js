import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Counter1 initialCount={0} />
      <Counter2 initialCount={1} />
      <Counter3 initialCount={0} />
      <Counter4 initialCount={1} />
      <Sum totalCount={sum}/>
    </div>
  );
}
export default App;

function Counter1({ initialCount }) {
  const [value1, setValue] = useState(initialCount);
  return (
    <div>
      <button
        onClick={function () {
          setValue(value1 + 1);
        }}
      >
        Counter 1
      </button>
      {value1}
    </div>
  );
}

function Counter2({ initialCount }) {
  const [value2, setValue] = useState(initialCount);
  return (
    <div>
      <button
        onClick={function () {
          setValue(value2 + 1);
        }}
      >
        Counter 2
      </button>
      {value2}
    </div>
  );
}

function Counter3({ initialCount }) {
  const [value3, setValue] = useState(initialCount);
  return (
    <div>
      <button
        onClick={function () {
          setValue(value3 + 2);
        }}
      >
        Counter 3
      </button>
      {value3}
    </div>
  );
}

function Counter4({ initialCount }) {
  const [value4, setValue] = useState(initialCount);
  return (
    <div>
      <button
        onClick={function () {
          setValue(value4 * 2);
        }}
      >
        Counter 4
      </button>
      {value4}
    </div>
  );
}

function Sum({ totalCount }) {
  const [sum, setSum] = useState(totalCount);
  return <div>{value1+value2+value3+value4=sum}</div>;
}

/*   
4 counters
1st: Starts from 0, button click increases count by 1
2nd: Start from 1, button click increases count by 1
3rd: Starts from 0, increase by 2
4th: Starts from 1, button click doubles count

Extra element: Box that contains the sum of all 4 counters
Each of the counter to be a state...
*/
