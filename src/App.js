import React, { Component } from "react";
import "./styles.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";

class App extends Component {
  // eslint-disable-next-line no-use-before-define" before the render line in App.js
  render() {
    return (
      <div className="App">
        <UserGreeting />
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick /> */}
        {/* <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Kate" heroName="Superman" /> */}
        {/* <Greet name="Nora" heroName="Batman">
              </Greet>  */}
        {/* <Welcome name="Kate" heroName="Superman" >          
        </Welcome> 
      <Hello />  */}
      </div>
    );
  }
}
export default App;
