import React, { useContext } from "react";
import { CountContext } from "../App";
// import CompoHD from "./CompoHD";

function CompoHA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Compo A -{countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}
export default CompoHA;
