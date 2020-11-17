import React from "react";
import "./title.scss";
const Title = ({ children, techItem, techName, ...otherProps }) => {
  return (
    <div className={`${techItem ? "tech-title" : ""} title`} {...otherProps}>
      {children}
    </div>
  );
};

export default Title;
