import React, { useState } from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai2.png";
import "./header.css";
import ReactLoading from "react-loading";
import { motion } from "framer-motion";

const Header = () => {
 
  return (
    <motion.div variants={{
      hidden: { opacity: 0, y: 5 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate="visible"
    transition={{
      ease: "linear",
      duration: 0.5,
      x: { duration: 2 },
    }} className="sav__header section__padding" id="home">
      <div className="sav__header-content">
      
       
        
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            ease: "linear",
            duration: 0.5,
            x: { duration: 2 },
          }}
          className="gradient__text"
        >
          Street Bites Spotlight{" "}
        </motion.h1>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            ease: "linear",
            duration: 0.5,
            x: { duration: 2 },
          }}
          className="gradient__text"
        >
          {" "}
          Where Flavor Meets the Map{" "}
        </motion.h1>
        <p>
          Locate. Savor. Share. Your Guide to Local Food Wonders and Vendor
          Stories. From Streets to Reels: Discover, Relish, and Amplify Small
          Food Vendors Everywhere.
        </p>

        <div className="sav__header-content__input">
          <div className="sav__header-content__input-div">
            <button className="sav__header-content__input-ask" type="button">
              Explore
            </button>
          </div>

          <a className="see-anchor" href="#features"></a>
        </div>

        <div className="sav__header-content__people">
          <img src={people} alt="" />
          <p>1000+ happy users!</p>
        </div>
      </div>

      <div className="sav__header-image">
        <img src={ai} alt="" />
      </div>
    </motion.div>
  );
};

export default Header;
