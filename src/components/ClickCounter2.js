import React, { Component } from "react";
// import withCounter from "./withCounter";

class ClickCounter2 extends Component {
   render() {
    const { count, incrementCount } = this.state;
    return <button onClick={incrementCount}>Click {count} times</button>
  }
export default ClickCounter2;
