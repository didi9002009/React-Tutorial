import React, { useContext } from "react";
import "./styles.css";
// import ClassCounter from "./componentsH/ClassCounter";
// import HookCounter from "./componentsH/HookCounter";
// import HookCounter2 from "./componentsH/HookCounter2";
// import HookCounter3 from "./componentsH/HookCounter3";
// import HookCounter4 from "./componentsH/HookCounter4";
// import HookCounterOne from "./componentsH/HookCounterOne";
// import HookMouse from "./componentsH/HookMouse";
// import MouseContainer from "./componentsH/MouseContainer";
// import IntervalHookCounter from "./componentsH/IntervalHookCounter";
// import DataFetching from "./componentsH/DataFetching";
// import ComponentC from "./componentsH/ComponentC";
// import Counter1 from "./componentsH/Counter1";
import Counter2 from "./componentsH/Counter2";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Dan"}>
        <ChannelContext.Provider value={"Danology"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <Counter2 />
    </div>
  );
}
export default App;
