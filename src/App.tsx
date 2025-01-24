import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@jamsr-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex  justify-center items-center mt-[100px]">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://jamsr-ui.jamsrworld.com/guides/installation"
          target="_blank"
        >
          <img
            src="https://jamsr-ui.jamsrworld.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull-logo.ad048b3a.png&w=128&q=75"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <div className="flex flex-col gap-4 items-center">
      <h1>Vite + React + JamsrUI</h1>
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="solid"
          color="primary" 
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      <p className="read-the-docs">Click on the JamarUI logo to learn more</p>
      </div>
    </>
  );
}

export default App;
