import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Garent</button> */}
      <button onClick={() => props.greetHandler("child")}>Greet Garent</button>
    </div> //3. excuting the mtd using prop obj, can destruct the prop obj in this fn compo
  );
}
export default ChildComponent;
