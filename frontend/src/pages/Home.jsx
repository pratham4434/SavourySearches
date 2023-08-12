import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>

        <div className="gradient__bg">{/* <Cards /> */}</div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
