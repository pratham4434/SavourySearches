import React from "react";
import "./input.css";

const Input = () => {
  return (
    <div className="input_section">
      <div className="inp_bar">
        <input
          className="input"
          placeholder="Type something to search here...."
        />
        <div className="btn_search">
          <button>🔍</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
