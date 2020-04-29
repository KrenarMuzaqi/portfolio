import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Loader from "./components/Loader/Loader";

import Homepage from "./pages/homepage/homepage";
import ThankYou from "./pages/thank-you/thank-you";

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
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

export default App;
