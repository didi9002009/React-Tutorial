import React, { Component } from "react";
import CompoF from "./CompoF";
import UserContext from "./userContext";

class CompoE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        Component E context {this.context}
        <CompoF />
      </div>
    );
  }
}
export default CompoE;
