// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Portfolio isProduct={false} />} />
        <Route path="/portfolio" element={<Portfolio isProduct={false} />} />
        <Route path="/product" element={<Portfolio isProduct={true} />} />
      </Routes>
    </Router>
  );
}

export default App;
