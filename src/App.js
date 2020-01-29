import React, { Component } from "react";
import "./styles.css";
// import Form from "./components/Form";
// import LifecycleA from "./components/LifecycleA";
// import FragmentDemo from "./components/FragmentDemo";
// import Table from "./components/Table";
// import PureComp from "./components/PureComp";
// import ParentComp from "./components/ParentComp";
// import Refs from "./components/Refs";
// import FocusInput from "./components/FocusInput";
// import FRParentInput from "./components/FRParentInput";
// import Portal from "./components/Portal";
// import Hero from "./components/Hero";
// import ErrorBoundary from "./components/ErrorBoundary";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
import ClickCounter2 from "./components/ClickCounter2";
import HoverCounter2 from "./components/HoverCounter2";

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
        {/* <ParentComp /> */}
        {/* <Refs /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}
        {/* <Portal /> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroName="Superman" />
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}
        {/* <ClickCounter name="Dan" /> */}
        {/* <HoverCounter name="Dan" /> */}
        <ClickCounter2 name="Dan" />
        <HoverCounter2 name="Dan" />
        <User render={(isLoggedIn)=>isLoggedIn ? 'Dan' : 'Guest'}
      </div>
    );
  }
}
export default App;
