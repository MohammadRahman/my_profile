import React from "react";
import CustomButton from "../../components/button/CustomButton";
import Technology from "../../components/technology/Technology";
import Title from "../../components/title/Title";
import "./homepage.scss";
const Homepage = () => {
  return (
    <div className="homepage-container">
      <section className="first-section">
        <div className="left-container">
          <div className="content">
            <div className="header-title">
              <Title headerContent>Fullstack developer</Title>
            </div>
            <div className="button">
              <CustomButton>Learn More</CustomButton>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="image-box">
            <img src="images/profile1.jpg" />
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="title-element">
          <Title>Tech Stack</Title>
        </div>
        <div className="card-element">
          <Technology />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
