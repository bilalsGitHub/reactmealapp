import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  const [count, setCount] = useState(0);
  const [input, setinput] = useState("");

  const gettheinputcallback = (input) => {
    console.log("asdasd");
    setinput(input);
  };
  return (
    <>
      <Header gettheinput={gettheinputcallback}></Header>
      <h1>Vite + React</h1>
      <h1>{input}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
