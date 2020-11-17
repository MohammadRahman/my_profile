import React from "react";
import "./techItem.scss";
import Title from "../../title/Title";

const TechItem = ({ title, details }) => {
  return (
    <div className="tech-item-container">
      <div className="tech-title">
        <Title techItem>{title}</Title>
      </div>
      <div className="detail-content">
        {details.map((deta) => {
          return (
            <div key={deta.id} className="content-container">
              <div className="actual-content">
                <div className="icon"> {deta.icon}</div>
                <div className="conten-name"> {deta.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechItem;
