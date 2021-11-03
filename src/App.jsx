import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/pages/login/login";
import Todos from "./components/pages/todos/todos";
import Home from "./components/pages/home/home";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.user.token);

  return (
    <Router>
      <Switch>
        {token ? (
          <>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route exact path="*">
              <Redirect to={{ pathname: "/home" }} />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="*" >  
              <Redirect to={{ pathname: "/" }} />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
