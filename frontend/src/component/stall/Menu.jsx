import React from "react";

const Menu = ({ enlister, menuUrl }) => {
  return (
    <div className="w-11/12 m-auto mt-5 mb-5">
      <div>
        <h1 className="text-xl mb-5">{`Enlister: ${enlister}`}</h1>
      </div>
      <div>
        <img src={menuUrl} alt="" />
      </div>
    </div>
  );
};

export default Menu;
