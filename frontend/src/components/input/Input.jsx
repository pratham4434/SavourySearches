import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./input.css";
import { fetchDataFromApi } from "./api";
import { motion } from "framer-motion";
import { PiMagnifyingGlassBold } from "react-icons/pi";
const Input = () => {
  const [queryInput, setQueryInput] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && queryInput.length > 0) {
      navigate(`/searching/${queryInput}`);
    }
  };

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/searching/multi?query=${query}`).then((res) => {
      setData(res);

      setLoading(false);
    });
  };
  useEffect(() => {
    // fetchInitialData();
  }, [queryInput]);

  return (
    <motion.div
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
      className="input_section"
    >
      <div className="inp_bar">
        <input
          className="input"
          type="text"
          placeholder="Type something to search here...."
          onChange={(e) => setQueryInput(e.target.value)}
          onKeyUp={searchQueryHandler}
        />
        <div className="btn_search">
          <button>
            <PiMagnifyingGlassBold />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Input;
