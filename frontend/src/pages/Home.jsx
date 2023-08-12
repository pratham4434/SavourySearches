import React from "react";
import Navbar from "../components/navbar/Navbar";
// import LoginButton from "../components/Login";
// import LogoutButton from "../components/LogoutButton";
// import Profile from "../components/Profile";

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
        {/* <Profile /> */}
        <div className="gradient__bg">{/* <Cards /> */}</div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
