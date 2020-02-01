import React, { useState, useEffect } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

//   const logMousePosition = e => {
//     console.log("Mouse event");
//     setX(e.clientX);
//     setY(e.clientY);
//   };

//   useEffect(() => {
//     console.log("useEffct called");
//     window.addEventListener("mousemove", logMousePosition);
//   }, []);
  return (
    <div>
     <button onClick={() => setDisplay(!display)}>Toggle display</button>
     {display && <HookMouse />}
    </div>
  );
}
export default MouseContainer;
