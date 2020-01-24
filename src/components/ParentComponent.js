import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent"
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    //1. define the mtd
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div> //2. pass the mtd as a prop
    );
  }
}
export default ParentComponent;
