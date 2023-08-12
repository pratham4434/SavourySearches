import React from "react";
import Navbar from "../components/navbar/Navbar";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <>
      <div>
        <div className="gradient__bg">
          <Navbar />
          {/* <HeroSection /> */}
        </div>
        {/* <LoginButton /> */}
        {/* <LogoutButton /> */}

        <div className="gradient__bg">
          {/* <Cards /> */}
          <Profile />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
