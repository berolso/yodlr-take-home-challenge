import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Admin from "./Admin";
import User from "./User";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/users/:id">
        <User />
      </Route>
    </Switch>
  );
}

export default Routes;
