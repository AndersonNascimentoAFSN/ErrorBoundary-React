import { useState } from "react";

const Counter = (props: any) => {
  return <h1>The total counter is {props.counter.toFixed(2)}</h1>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Counter /* counter={count} */ />
        <button onClick={() => setCount((old) => old + 1)}>Counter</button>
      </div>
    </div>
  );
}

export default App;
