import { useState } from "react";
import Login from "./Login";
import Hello from "./Hello";

function App() {
  return (
    <div>
      <div>
        <Login></Login>
      </div>
      <div>
        <Hello />
      </div>
    </div>
  );
}

export default App;
