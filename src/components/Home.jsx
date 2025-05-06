import React, { useEffect } from "react";
import "../App.css";
import "./Home.css";
import profileImg from "../assets/profile2.png";
import psIcon from "../assets/skills.png";
import Navbar from "./Navbar";

const Home = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const line = document.querySelector(".timeline-line");
    let lastVisibleIndex = -1;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            const index = Array.from(items).indexOf(entry.target);
            if (index > lastVisibleIndex) {
              lastVisibleIndex = index;
              const target = items[lastVisibleIndex];
              const lineHeight = target.offsetTop + target.offsetHeight / 2;
              line.style.height = `${lineHeight}px`;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => revealObserver.observe(el));

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const bar = document.getElementById("scroll-progress");
      if (bar) bar.style.width = `${scrollPercent}%`;
    };

    window.addEventListener("scroll", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="scroll-progress-bar" id="scroll-progress" />
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
              Product technologist with 3+ years' experience in full-stack development, UI/UX design, and product strategy. I specialize in React, Angular, WordPress, and Flutter, creating accessible, intuitive digital solutions.
            </p>
          </div>
        </div>

        <div className="resume-bottom">
          <div className="left-column">
          <section className="reveal">
  <h2 className="section-title">Education</h2>
  <div className="education-entry">
    <strong>University of Washington | 2023 – Dec 2025</strong>
    <p>Master’s in Information Management</p>
  </div>
  {/* <div className="education-entry">
    <strong>Manipal University Jaipur | 2016 – Nov 2019</strong>
    <p>Bachelor’s in Information Technology</p>
  </div> */}
</section>

            <section className="reveal">
              <h2 className="section-title">Softwares</h2>
              <div className="software-icons">
                <img src={psIcon} alt="Software Icons" />
              </div>
            </section>

            <section className="reveal">
              <h2 className="section-title">Key Skills</h2>
              <div className="skill-tags">
                <span>#React</span>
                <span>#Angular</span>
                <span>#JavaScript</span>
                <span>#WordPress</span>
                <span>#Flutter</span>
                <span>#UI/UX</span>
                <span>#Python</span>
                <span>#HTML/CSS</span>
              </div>
            </section>

            <section className="reveal">
              <h2 className="section-title">Awards</h2>
              <p><strong>Revere XR Hackathon Winner – Feb 2024</strong></p>
              <p>Led design and development of an XR web app telling Seattle’s music history through immersive storytelling.</p>
              <div className="award-box">
                <p><strong>1st Prize – AIMS PM Competition 2025</strong></p>
                <p>Won for designing a scalable solution for student service workflows judged by Smartsheet PMs.</p>
              </div>
            </section>

            <section className="reveal">
              <h2 className="section-title">Activities</h2>
              <p className="exp-role">VP of Marketing</p>
              <p className="exp-org">ISACA UW | 2024 – 2025</p>
              <ul className="exp-bullets">
                <li>Led branding and visuals for all cybersecurity events.</li>
                <li>Increased event turnout to 40+ attendees with consistent visual strategy.</li>
              </ul>
              <p className="exp-role">Director of Outreach</p>
              <p className="exp-org">AIMS UW | 2024 – 2025</p>
              <ul className="exp-bullets">
                <li>Coordinated sponsor outreach for PM competition and Diwali Night (500+ attendees).</li>
                <li>Organized Tableau site visit and Chipotle fundraiser.</li>
              </ul>
            </section>
          </div>

          <div className="right-column">
            <section className="exp-section">
              <h2 className="section-title">Work Experience</h2>
              <div className="timeline">
                <div className="timeline-line"></div>

                <div className="timeline-item">
                  <h3 className="timeline-title">Software Developer Intern</h3>
                  <p className="timeline-org">University of Washington IT</p>
                  <p className="timeline-dates">Oct 2024 – Present</p>
                  <ul className="timeline-desc">
                    <li>Built KPI dashboard using React Charts, reducing reporting time by 40%.</li>
                    <li>Created a GitHub metrics tool saving 2+ hours/month of manual effort.</li>
                    <li>Developed a WordPress plugin to speed up contact directory searches by 50%.</li>
                  </ul>
                </div>

                <div className="timeline-item">
                  <h3 className="timeline-title">Software Engineer</h3>
                  <p className="timeline-org">Somish Solutions</p>
                  <p className="timeline-dates">Jun 2022 – Aug 2023</p>
                  <ul className="timeline-desc">
                    <li>Built front-end for PlotX fantasy trivia game using Angular and Flutter.</li>
                    <li>Developed admin panel with data visualizations.</li>
                    <li>Implemented Hunch app features like messaging and follow system.</li>
                  </ul>
                </div>

                <div className="timeline-item">
                  <h3 className="timeline-title">Software Engineer</h3>
                  <p className="timeline-org">AnalyticsQuad4</p>
                  <p className="timeline-dates">Jan 2020 – Mar 2022</p>
                  <ul className="timeline-desc">
                    <li>Created WordPress intranet with BuddyPress and WP File Download.</li>
                    <li>Built React components for healthcare UX.</li>
                    <li>Maintained PHP-based public website.</li>
                  </ul>
                </div>

                <div className="timeline-item">
                  <h3 className="timeline-title">Graduate Engineer Trainee</h3>
                  <p className="timeline-org">Welspun</p>
                  <p className="timeline-dates">Jan 2019 – May 2019</p>
                  <ul className="timeline-desc">
                    <li>Gathered requirements for employee housing dashboard.</li>
                    <li>Built dashboard in React to track assignments and availability.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;