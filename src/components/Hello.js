import React from "react";

export const Hello = () => {
  // return (
  //   <div className='dummyClass>
  //     <h1>Hello Danise</h1>;
  //   </div>
  // );
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" }, // can be null
    React.createElement("h1", null, "hello Danise")
  );
};
export default Hello;
