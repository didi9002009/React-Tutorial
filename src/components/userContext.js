import React from "react";

const UserContext = React.createContext("CodeEvolution");
// default val only used when no Provider in App.js

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
