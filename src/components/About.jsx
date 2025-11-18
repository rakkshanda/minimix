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
I enjoy building digital experiences that feel clear, inviting, and genuinely helpful. My work blends thoughtful design with practical engineering, always with a focus on making everyday interactions smoother and more meaningful.            </p>

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

       
      </div>
    </>
  );
};

export default About;

