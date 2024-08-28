import React from "react";

function Container({ children }) {
  return (
    <div>
      <div>Container calisti</div>
      <hr />
      {children}
    </div>
  );
}

export default Container;
