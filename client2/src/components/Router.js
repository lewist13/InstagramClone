import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

class Router extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <LandingPage>
                <Home />
              </LandingPage>
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default Router;
