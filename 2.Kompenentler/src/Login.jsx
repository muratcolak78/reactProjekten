import React from "react";
import Hello from "./Hello";

function Login() {
  return (
    <div
      style={{
        padding: "20px 20px",
        border: "2px solid black",
        textShadow: "0px 1px 3px blue",
      }}
    >
      <div>
        <p>Username :</p>
        <input type="text" name="text" id="text" />
      </div>
      <div>
        <p>Password :</p>
        <input type="text" name="password" id="password" />
      </div>
      <button type="submit">Sign in</button>
      <div>
        <Hello />
      </div>
    </div>
  );
}

export default Login;
