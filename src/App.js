import React, { Component } from "react";
import "./styles.css";
import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <Message /> */}
        <Greet name="Kate" heroName="Superman" />
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
