// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ProjectDetail from './components/ProjectDetail';
import ClaimRunnerCaseStudy from './components/ClaimRunnerCaseStudy';
import AIMSCaseStudy from './components/AIMSCaseStudy';
import GenericCaseStudy from './components/GenericCaseStudy';
import Cursor from './components/Cursor';

function App() {
  return (
    <>
    <Cursor />
    <div className="atmosphere" aria-hidden="true">
      <div className="blob blob--violet" />
      <div className="blob blob--peach" />
      <div className="blob blob--lavender" />
    </div>
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio isProduct={false} />} />
        <Route path="/portfolio" element={<Portfolio isProduct={false} />} />
        <Route path="/claimrunner" element={<ClaimRunnerCaseStudy />} />
        <Route path="/aims" element={<AIMSCaseStudy />} />
        <Route path="/project/:slug" element={<GenericCaseStudy />} />
        <Route path="/portfolio/:projectId" element={<ProjectDetail isProduct={false} />} />
        <Route path="/product" element={<Portfolio isProduct={true} />} />
        <Route path="/product/:projectId" element={<ProjectDetail isProduct={true} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
