import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Admin from "./Admin";
import User from "./User";

function Routes({ auth, setAuth, setToken }) {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/signup">
        <SignUp auth={auth} setAuth={setAuth} setToken={setToken} />
      </Route>
      <Route exact path="/login">
        <Login auth={auth} setAuth={setAuth} setToken={setToken} />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/users/:id">
        <User />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
