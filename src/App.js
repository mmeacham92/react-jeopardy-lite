import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/jeopardy/Jeopardy";
import NoMatch from "./NoMatch";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Welcome {...props} name="Michael" />}
            />
            <Route path="/welcome/:name" component={Welcome} />
            <Route path="/clock" component={Clock} />
            <Route path="/contact" component={Contact} />
            <Route path="/jeopardy" component={Jeopardy} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
