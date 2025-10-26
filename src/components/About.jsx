import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import profileImage from "../assets/image.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              My name is Rakshanda. I grew up in India and now live in Seattle. Having moved around the world since a young age, my work is heavily influenced by the mundane moments of life and diverse cultural experiences. As a passionate software developer and product designer, I love creating meaningful digital experiences that blend functionality with beautiful design.
            </p>

            <p className="about-middle">
              Outside work, I like to explore new coffee shops around the city, experiment with different brewing methods, travel to new places, and spend time with friends and family.
            </p>

            <p className="about-closing">
              Thank you for stopping by!
            </p>
          </div>

          <div className="about-image">
            <img src={profileImage} alt="Rakshanda" />
          </div>
        </div>

        <div className="about-footer">
          <p className="copyright">©2025 Rakshanda</p>
        </div>
      </div>
    </>
  );
};

export default About;

