import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cards from "../components/cardsection/Cards";
import Input from "../components/input/Input";

const Home = () => {
  return (
    <>
      <div>
        <div className="gradient__bg">
          <Navbar />
          <Header />
          <Input />
        </div>

        <div className="gradient__bg">
          <Cards />
        </div>
      </div>
      <div className="gradient__bg">
        <Footer />
      </div>
    </>
  );
};

export default Home;
