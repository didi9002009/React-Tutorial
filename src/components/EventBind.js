import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello"
    };
    // this.clickHandler = this.clickHandler.bind(this); // mtd 3  use >> 1&2
  }
  // clickHandler() {
  //   this.setState({
  //     message: "Goodbye!"
  //   });
  //   // console.log(this);
  // }
  clickHandler = () => {
    //mtd 4, like 3, preferable
    this.setState({
      message: "Goodbye!"
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> // mtd 1*/}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> // mtd 2*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
export default EventBind;
