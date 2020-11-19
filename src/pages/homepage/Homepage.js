import React from "react";
import CustomButton from "../../components/button/CustomButton";
import Contacts from "../../components/contacts/Contacts";
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
              <Title headerContent>
                one-stop-shop for all of your Web Dev Needs.
              </Title>
            </div>
            <div
              className=""
              style={{
                fontSize: "18px",
                padding: "10px 0",
                display: "flex",
                width: "100%",
                height: "20%",
                justifyContent: "flex-start",
              }}
            >
              <p>
                Your end-to-end solution partner for custom-tailored websites
                and Web based applications. Whether it’s integrating with your
                existing systems, or developing a from-scratch solution,
                offering customised services that will meet your specific needs.
              </p>
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
      <section
        style={{
          width: "100%",
          height: "400px",
          marginTop: "20px",
          height: "fit-cotent",
          border: "1px solid black",
          padding: "20px 0",
          background: "rgba(0,0,0,0.7)",
          color: "white",
        }}
      >
        <div
          className=""
          style={{
            display: "flex",
            width: "100%",
            height: "30%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title>Contacts</Title>
        </div>
        <div className="content-class">
          <Contacts />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
