import React from "react";
import "../App.css";
import "./Home.css";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import font from "../assets/font.png";

import image55 from "../assets/5.png";
import ProjectCarousel from './ProjectCarousel';

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="scroll-progress-bar" id="scroll-progress" />
      <Navbar />
<div style={{ marginTop: '10px' }}>
        <img src={image1} alt="Full Width Visual" className="full-width-image" />
        <img src={image2} alt="Full Width Visual" className="full-width-image" />
        <img src={image3} alt="Full Width Visual" className="full-width-image" />
        <img src={image4} alt="Full Width Visual" className="full-width-image" />
        <img src={font} alt="Full Width Visual" className="full-width-image" />

        <ProjectCarousel />
        <img src={image55} alt="Full Width Visual" className="full-width-image" />
      </div>
    </>
  );
};

export default Home;
