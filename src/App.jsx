// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ProjectDetail from './components/ProjectDetail';
import ClaimRunnerCaseStudy from './components/ClaimRunnerCaseStudy';
import AIMSCaseStudy from './components/AIMSCaseStudy';
import FolkloreCaseStudy from './components/FolkloreCaseStudy';
import SouthProjectCaseStudy from './components/SouthProjectCaseStudy';
import CareerCupidCaseStudy from './components/CareerCupidCaseStudy';
import MarketPulseCaseStudy from './components/PortfolioInsightsCaseStudy';
import HuggingFaceCaseStudy from './components/HuggingFaceCaseStudy';
import PlotXCaseStudy from './components/PlotXCaseStudy';
import HunchCaseStudy from './components/HunchCaseStudy';
import VisionDefectCaseStudy from './components/VisionDefectCaseStudy';
import IEngageCaseStudy from './components/IEngageCaseStudy';
import GenericCaseStudy from './components/GenericCaseStudy';
import Cursor from './components/Cursor';
// The PM site (GitHub Pages) and the tech site (rakkshanda.com) build from this
// same source. Only `npm run build:pm` sets REACT_APP_SITE=pm; the default build
// renders exactly the tech site it always has. PM screens are lazy-loaded so their
// code (and CSS side effects) stay out of the tech site's main bundle.
const IS_PM_SITE = process.env.REACT_APP_SITE === 'pm';

const PMPortfolio = React.lazy(() => import('./pm/PMPortfolio'));
const PMCaseStudy = React.lazy(() => import('./pm/PMCaseStudy'));

function PMApp() {
  return (
    <>
      <Cursor />
      <div className="atmosphere" aria-hidden="true">
        <div className="blob blob--violet" />
        <div className="blob blob--peach" />
        <div className="blob blob--lavender" />
      </div>
      <Router basename={process.env.PUBLIC_URL}>
        <React.Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<PMPortfolio />} />
            <Route path="/case/:slug" element={<PMCaseStudy />} />
            <Route path="*" element={<PMPortfolio />} />
          </Routes>
        </React.Suspense>
      </Router>
    </>
  );
}

function App() {
  if (IS_PM_SITE) return <PMApp />;

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
        <Route path="/folklore" element={<FolkloreCaseStudy />} />
        <Route path="/south-project" element={<SouthProjectCaseStudy />} />
        <Route path="/career-cupid" element={<CareerCupidCaseStudy />} />
        <Route path="/marketpulse" element={<MarketPulseCaseStudy />} />
        <Route path="/huggingface" element={<HuggingFaceCaseStudy />} />
        <Route path="/plotx" element={<PlotXCaseStudy />} />
        <Route path="/hunch" element={<HunchCaseStudy />} />
        <Route path="/visiondefect" element={<VisionDefectCaseStudy />} />
        <Route path="/iengage" element={<IEngageCaseStudy />} />
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
