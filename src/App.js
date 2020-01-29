import React, { Component } from "react";
import "./styles.css";
// import Form from "./components/Form";
// import LifecycleA from "./components/LifecycleA";
// import FragmentDemo from "./components/FragmentDemo";
// import Table from "./components/Table";
// import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";

class App extends Component {
  // eslint-disable-next-line no-use-before-define" before the render line in App.js
  render() {
    return (
      <div className="App">
        {/* <Form /> */}
        {/* <LifecycleA /> */}
        {/* <FragmentDemo /> */}
        {/* <Table /> */}
        {/* <PureComp /> */}
        <ParentComp />
      </div>
    );
  }
}
export default App;
