import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Counter = (props: any) => {
  return <h1>The total counter is {props.counter.toFixed(2)}</h1>;
};

const ErrorHandler = () => {
  return (
    <div>
      <h2>Ups, sorry</h2>
      <h3>Something went wrong, but we are working to fix it!</h3>
    </div>
  );
};

function notifyError() {
  // call our API
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Aplicação
      </h1>

      <ErrorBoundary
        FallbackComponent={ErrorHandler}
        onError={(arg1, arg2) => {
          console.log("arg1", arg1, "arg2", arg2);
        }}
      >
        <Counter /* counter={count} */ />
        <button onClick={() => setCount((old) => old + 1)}>Counter</button>
      </ErrorBoundary>
    </div>
  );
}

export default App;
