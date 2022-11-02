import React from "react";
import "./home.css";
import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Project from "../../Components/Project/Project";
import Product from "../../Components/Product/Product";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div id="parent">
      <Navbar />
      <Header />
      <About />
      <Project />
      <Product />
      <ContactUs />
    </div>
  );
};

export default Home;
