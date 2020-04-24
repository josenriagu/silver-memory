import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <PrivateRoute
          exact
          path="/"
          render={(props) => {
            return <Home {...props} />;
          }}
        />
        <Route
          path="/register"
          render={(props) => {
            return <Register {...props} />;
          }}
        />
        <Route
          path="/login"
          render={(props) => {
            return <Login {...props} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
