import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Home, Career, Detail, About } from "../containers/index";

import { MainLayout } from "../layout";

import PubliceRoute from "./PubliceRoute";
// import PrivateRouter from "./PrivateRoute";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <PubliceRoute exact path={`/`} component={Home} layout={MainLayout} />
        <PubliceRoute
          exact
          path={`/career`}
          component={Career}
          layout={MainLayout}
        />
        <PubliceRoute
          exact
          path={`/career/:id`}
          component={Detail}
          layout={MainLayout}
        />
        <PubliceRoute
          exact
          path={`/about`}
          component={About}
          layout={MainLayout}
        />
      </Switch>
    </Router>
  );
}
