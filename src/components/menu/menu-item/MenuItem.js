import React from "react";
import "./menuItem.scss";
const MenuItem = ({ man }) => {
  return (
    <>
      <div className="menu-item" key={man.id}>
        <div className="menu-content">{man.title}</div>
      </div>
    </>
  );
};

export default MenuItem;
