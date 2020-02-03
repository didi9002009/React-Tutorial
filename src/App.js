import React, { useReducer } from "react";
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
// import Counter2 from "./componentsH/Counter2";
// import Counter3 from "./componentsH/Counter3";
import CompoHA from "./componentsH/CompoHA";
import CompoHB from "./componentsH/CompoHB";
import CompoHC from "./componentsH/CompoHC";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
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
        {/* <Counter2 /> */}
        {/* <Counter3 /> */}
        count - {count}
        <CompoHA />
        <CompoHB />
        <CompoHC />
      </div>
    </CountContext.Provider>
  );
}
export default App;
