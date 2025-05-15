import React from "react";
import "../App.css";
import "./Home.css";
import image5 from "../assets/image5.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

import image55 from "../assets/5.png";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="scroll-progress-bar" id="scroll-progress" />
      <Navbar />
<div style={{ marginTop: '10px' }}>
        <img src={image5} alt="Full Width Visual" className="full-width-image" />
          <img src={image2} alt="Full Width Visual" className="full-width-image" />
            <img src={image3} alt="Full Width Visual" className="full-width-image" />
              <img src={image4} alt="Full Width Visual" className="full-width-image" />
                <img src={image55} alt="Full Width Visual" className="full-width-image" />
      </div>
    </>
  );
};

export default Home;
