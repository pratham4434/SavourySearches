import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import ReactLoading from "react-loading";
import "./stalls.css";
import { GoStarFill } from "react-icons/go";
import ai2 from "../assets/stall2.png";
import { motion } from "framer-motion";
import Input from "../components/input/Input";
import { useParams } from "react-router-dom";
import axios from "axios";

const Stalls = () => {
  const { term } = useParams();
  const [cardsData, setCardsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const res = (
      await axios.get(
        `${process.env.REACT_APP_BACKENDURL}/poststall/search/${term}`
      )
    ).data;
    setCardsData(res);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Input />
        <motion.div animate={{ x: -20, y: 20 }} className="main">
          <div className="card-container2">
            <div className="card_sect-text">
              <h1 className="gradient__text2"> Where Flavor Meets the Map </h1>
              <p>
                Locate. Savor. Share. Your Guide to Local Food Wonders and
                Vendor Stories.
              </p>
            </div>
            <br />
            <br />

            <div className="cards-elements">
              {isLoading ? (
                <div>
                  <ReactLoading
                    type="bars"
                    color="#969696"
                    height={100}
                    width={50}
                  />
                </div>
              ) : (
                cardsData.map((card) => (
                  <div className="card" key={card.id}>
                    <img src={card.image} alt={`Image ${card.id}`} />
                    <div className="flex">
                      <h3 className="card_title">{card.title}</h3>
                      <p>{card.description}</p>
                      <p className="star">
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                      </p>
                      <button type="button" className="btn_stall">
                        View Stall
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Stalls;
