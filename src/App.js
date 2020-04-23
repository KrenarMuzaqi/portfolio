import React, { Component } from "react";

import smoothscroll from "smoothscroll-polyfill";

import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Portfolio from "./components/Portfolio/portfolio";
import Testimonials from "./components/Testimonials/testimonials";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import ScrollArrow from "./components/scrollArrow/scrollArrow";
import Loader from "./components/Loader/Loader";

import "./App.css";

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
    smoothscroll.polyfill();

    return (
      <div className="App">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <div>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
            <ScrollArrow />
          </div>
        )}
      </div>
    );
  }
}

export default App;
