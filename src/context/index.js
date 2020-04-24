import React, { useReducer, createContext } from "react";

// define initial state
const _initState = {
  isAuthenticated: false,
};

// define reducer
const _authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
      };
    case "REGISTER":
      return {
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

// create context
export const AuthContext = createContext();

// define HOC with context
const AuthContextProvider = (props) => {
  const _authHook = useReducer(_authReducer, _initState);

  return (
    <AuthContext.Provider value={_authHook}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
