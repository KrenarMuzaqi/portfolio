import React from "react";

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

import "./App.css";

function App() {
  // kick off the polyfill!
  smoothscroll.polyfill();
  return (
    <div className="App">
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
  );
}

export default App;
