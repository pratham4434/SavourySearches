import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai2.png";
import "./header.css";

const Header = () => (
  <div className="sav__header section__padding" id="home">
    <div className="sav__header-content">
      <h1 className="gradient__text">Street Bites Spotlight </h1>
      <h1 className="gradient__text"> Where Flavor Meets the Map </h1>
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
  </div>
);

export default Header;
