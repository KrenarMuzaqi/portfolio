import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Loader from "./components/Loader/Loader";

import Homepage from "./pages/homepage/homepage";
import ThankYou from "./pages/thank-you/thank-you";
import NotFound from "./pages/NotFound/NotFound";

class App extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  };

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />}
              <Route exact path="/thankyou" component={ThankYou} />
              <Route component={NotFound} />
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

export default App;
