import React from "react";

import Navbar from "../../components/Navbar/navbar";
import Header from "../../components/Header/header";
import About from "../../components/About/about";
import Services from "../../components/Services/services";
import Portfolio from "../../components/Portfolio/portfolio";
import Testimonials from "../../components/Testimonials/testimonials";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/footer";
import ScrollArrow from "../../components/scrollArrow/scrollArrow";

const Homepage = () => {
  return (
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
  );
};

export default Homepage;
