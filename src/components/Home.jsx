import React from "react";
import "../App.css";
import "./Home.css";
import profileImg from "../assets/profile2.png";
import psIcon from "../assets/skills.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-wrapper">
        <div className="resume-top">
          <div className="resume-left">
            <img src={profileImg} alt="Rakshanda" className="profile-photo" />
          </div>
          <div className="resume-right">
            <h2 className="intro-small">Hey, I'm</h2>
            <h1 className="intro-name">Rakshanda</h1>
            <div className="badges">
              <span className="badge">Frontend Engineer</span>
              <span className="badge">Product Manager</span>
            </div>
            <p className="description">
              Product technologist with over 2 years of experience in full-stack development, design,
              and product strategy. Specialized in React, WordPress, and UI/UX with a focus on creating
              accessible and intuitive web applications. Passionate about delivering impact through
              scalable design systems, data-driven decisions, and inclusive technology practices.
            </p>
          </div>
        </div>

        <div className="resume-bottom">
          <div className="left-column">
            <section>
              <h2 className="section-title">Education</h2>
              <p><strong>University of Washington | 2023 – 2025</strong><br />
              Master’s in Information Management</p>
              <div className="award-box">
                <p><strong>Runner-up – EduHacks 2024</strong></p>
                <p>Led the winning pitch for an AI-powered learning platform, competing with 30+ teams.</p>
              </div>
            </section>

            <section>
              <h2 className="section-title">Softwares</h2>
              <div className="software-icons">
                <img src={psIcon} alt="Ps" />
              
              </div>
            </section>

            <section>
              <h2 className="section-title">Key Skills</h2>
              <div className="skill-tags">
                <span>#Communication</span>
                <span>#Product Strategy</span>
                <span>#React</span>
                <span>#UI/UX</span>
                <span>#Team Leadership</span>
              </div>
            </section>

            <section>
              <h2 className="section-title">Awards</h2>
              <p><strong>1st Prize – AIMS PM Competition 2025</strong></p>
              <p>Judged by Smartsheet PMs, awarded for a scalable solution on student services workflow.</p>
            </section>
          </div>

          <div className="right-column">
            <section className="exp-section">
              <h2 className="section-title">Work Experience</h2>
              <p className="exp-role">Technical PM Intern</p>
              <p className="exp-org">ClaimRunner | Jan 2025 – Present</p>
              <ul className="exp-bullets">
                <li>Led product roadmap and frontend team building small claims automation.</li>
                <li>Built JSON-based claim export with full form validation and SCSS styling.</li>
              </ul>

              <p className="exp-role">Developer Intern</p>
              <p className="exp-org">University of Washington IT | Jun 2024 – Dec 2024</p>
              <ul className="exp-bullets">
                <li>Created a WordPress plugin for the People Directory with live search and filters.</li>
                <li>Presented at Web Council and adopted across multiple departments.</li>
              </ul>
            </section>

            <section className="exp-section">
              <h2 className="section-title">Activities</h2>
              <p className="exp-role">VP of Marketing</p>
              <p className="exp-org">ISACA UW | 2024 – 2025</p>
              <ul className="exp-bullets">
                <li>Ran branding for all cybersecurity events and increased turnout to 40+ attendees.</li>
                <li>Launched themed visual strategy adopted by other RSOs.</li>
              </ul>

              <p className="exp-role">Director of Outreach</p>
              <p className="exp-org">AIMS UW | 2024 – 2025</p>
              <ul className="exp-bullets">
                <li>Coordinated with sponsors and hosted 500-attendee PM Competition and Diwali Night.</li>
                <li>Scheduled Tableau site visit and organized Chipotle fundraiser event.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
