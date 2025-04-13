// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<div>Projects</div>} />
          <Route path="teams" element={<div>Teams</div>} />
          <Route path="analytics" element={<div>Analytics</div>} />
          <Route path="messages" element={<div>Messages</div>} /> 
          <Route path="integrations" element={<div>Integrations</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
