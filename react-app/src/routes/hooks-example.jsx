import { useCallback, useEffect, useState, useReducer, useMemo } from "react";
import { PageContainer } from "../components/page-container";

// USE STATE EXAMPLE
const UseStateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      click {count} times <br />
      <button onClick={() => setCount(count + 1)}>click me</button>
    </>
  );
};

// USE EFFECT EXAMPLE
const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <>
      click {count} times <br />
      <button onClick={() => setCount(count + 1)}>click me</button>
    </>
  );
};

// USE CALLBACK EXAMPLE
const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const half = useCallback(() => {
    return count / 2;
  }, [count]);

  //   console.log("half", half());
  return (
    <>
      click {count} times <br />
      <button onClick={() => setCount(count + 1)}>click me</button>
    </>
  );
};

// USE MEMO EXAMPLE
const FactorialCalculator = ({ number, list }) => {
  // Define a function to calculate factorial
  const calculateFactorial = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  };

  // Use useMemo to memoize the result of the factorial calculation
  const factorial = useMemo(() => {
    console.log("factorial memo");
    calculateFactorial(number);
  }, [number, list]);

  return (
    <div>
      <p>
        Factorial of {number} is: {factorial}
      </p>
    </div>
  );
};

const UseMemoExample = () => {
  const [number, setNumber] = useState(5);
  const [list, setList] = useState([]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setList(["1"])}>change list</button>
      <FactorialCalculator number={number} list={list} />
    </div>
  );
};

// USE REDUCER EXAMPLE
// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
};

const UseReducerExample = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

const HooksExample = () => {
  return (
    <PageContainer>
      <UseStateExample />
      <UseEffectExample />
      <UseCallbackExample />
      <UseReducerExample />
      <UseMemoExample />
    </PageContainer>
  );
};

export { HooksExample };
