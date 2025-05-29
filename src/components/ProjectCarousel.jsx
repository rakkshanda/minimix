import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCarousel.css';

import folkloreImg from '../assets/folklore.png';
import cupidImg from '../assets/cupid.png';
import aimsImg from '../assets/aims.png';
import hunchImg from '../assets/hunch.png';
import plotxImg from '../assets/plotx.png';


const projects = [
  { title: 'Folklore', image: folkloreImg },
  { title: 'Career Cupid', image: cupidImg },
  { title: 'AIMS website', image: aimsImg },
  { title: 'Hunch Website', image: hunchImg },
    { title: 'PlotX website', image: plotxImg },
];

const duplicatedProjects = [...projects, ...projects, ...projects];

export default function ProjectCarousel() {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleClick = (proj) => {
    navigate(`/portfolio?project=${encodeURIComponent(proj.title)}`);
  };

  return (
    <section className="carousel-section">
      
     
      <div
        className="infinite-carousel-wrapper"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={`infinite-carousel-track ${isHovering ? 'paused' : ''}`}>
          {duplicatedProjects.map((proj, index) => (
            <div
              key={index}
              className="carousel-item-link"
              onClick={() => handleClick(proj)}
              style={{ cursor: 'pointer' }}
            >
              <div className="carousel-item">
                <img src={proj.image} alt={proj.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
