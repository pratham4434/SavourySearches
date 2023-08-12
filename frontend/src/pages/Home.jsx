import React from "react";
import LoginButton from "../components/Login";
import LogoutButton from "../components/LogoutButton";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <>
      <div>
        <p>Hello</p>
        <LoginButton />
        <br />
        <LogoutButton />
        <br />
        <Profile />
      </div>
    </>
  );
};

export default Home;
