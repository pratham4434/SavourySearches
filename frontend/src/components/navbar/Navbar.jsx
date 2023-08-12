import React, { useState } from "react";

import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";

import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="/explore">Explore</a>
      </p>
      <p>
        <a href="/reels">Reels</a>
      </p>
      <p>
        <a href="/stalls">Stalls</a>
      </p>
      <p>
        <a href="/stalls">Posts</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={color ? "sav__navbar sav__navbar-bg" : "sav__navbar"}>
      <div className="sav__navbar-links">
        <div className="sav__navbar-links_logo">
          <p>
            <a href="#">SavourySearches</a>
          </p>
        </div>
        <div className="sav__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="sav__navbar-sign">
        {isAuthenticated ? (
          <div className="avatar-div">
            {/* <div className="avatar"></div>
            <p>name</p> */}
            <button
              onClick={() => loginWithRedirect()}
              type="button"
              className="bg-black"
            >
              
              Profile
            </button>
          </div>
        ) : (
          <>
            <button onClick={() => loginWithRedirect()} type="button">
              Sign In
            </button>
          </>
        )}
      </div>
      <div className="sav__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="sav__navbar-menu_container scale-up-center">
            <div className="sav__navbar-menu_container-links">
              <Menu />
              <div className="sav__navbar-menu_container-links-sign">
                <button onClick={() => loginWithRedirect()} type="button">
                  {" "}
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
