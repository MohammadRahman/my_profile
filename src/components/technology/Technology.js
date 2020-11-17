import React from "react";
import "./technology.scss";
import { TECH_STACK } from "../../data/techData";
import TechItem from "./tech-item/TechItem";

const Technology = () => {
  const [techstack, setStack] = React.useState(TECH_STACK);
  return (
    <div className="tech-container">
      {techstack.map(({ id, ...otherProps }) => (
        <TechItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Technology;
