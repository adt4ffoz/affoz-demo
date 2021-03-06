import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Home, Career, Detail, About, CreateUser, Login, } from "../containers/index";

import { MainLayout, AuthLayout } from "../layout";

import PubliceRoute from "./PubliceRoute";
// import PrivateRouter from "./PrivateRoute";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <PubliceRoute exact path={`/`} component={Home} layout={MainLayout} />
        <PubliceRoute
          exact
          path={`/job`}
          component={Career}
          layout={MainLayout}
        />
        <PubliceRoute
          exact
          path={`/job/:id`}
          component={Detail}
          layout={MainLayout}
        />
        <PubliceRoute
          exact
          path={`/about`}
          component={About}
          layout={MainLayout}
        />
        <PubliceRoute
          exact
          path={`/create-user`}
          component={CreateUser}
          layout={AuthLayout}
        />
        <PubliceRoute
          exact
          path={`/login`}
          component={Login}
          layout={AuthLayout}
        />
      </Switch>
    </Router>
  );
}
