import React from 'react';
// import savLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="sav__footer section__padding">
    <div className="sav__footer-heading">
      <h1 className="gradient__text"> Elevating Small Food Vendors with Every Bite </h1>
    </div>

    <div className="sav__footer-btn">
      <p>Go to Top</p>
    </div>

    <div className="sav__footer-links">
      <div className="sav__footer-links_logo">
        {/* <img src={savLogo} alt="sav_logo" /> */}
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="sav__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="sav__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="sav__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="sav__footer-copyright">
      <p>@2022 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;