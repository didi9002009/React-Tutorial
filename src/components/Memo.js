import React from "react";

function Memo(name) {
  console.log("rending memo compo");
  return <div>Memo Comp</div>;
}
export default React.memo(Memo);
