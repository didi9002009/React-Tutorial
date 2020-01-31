import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class CompoF extends Component {
  render() {
    return (
      <UserConsumer>
        {username => {
          return <div>Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}
export default CompoF;
