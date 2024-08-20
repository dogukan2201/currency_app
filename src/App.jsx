import "./App.css";

import { Ant } from "./components/Ant";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        EXCHANGE APP
        <Ant />
      </div>
    </>
  );
}

export default App;
