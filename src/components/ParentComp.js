import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "Dan"
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Dan"
      });
    }, 2000);
  }
  render() {
    console.log("******************Parent Comp");
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}
export default ParentComp;
