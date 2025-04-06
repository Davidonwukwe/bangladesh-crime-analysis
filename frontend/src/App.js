import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CrimeTrendsPage from "./pages/CrimeTrendsPage";
import CrimeByUnitPage from "./pages/CrimeByUnitPage";
import CrimeDistributionPage from "./pages/CrimeDistributionPage";
import FullDashboardPage from "./pages/FullDashboardPage";
import "./App.css";
import SeverityCheck from "./components/SeverityCheck";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crime-trends" element={<CrimeTrendsPage />} />
          <Route path="/crime-by-unit" element={<CrimeByUnitPage />} />
          <Route
            path="/crime-distribution"
            element={<CrimeDistributionPage />}
          />
          <Route path="/full-dashboard" element={<FullDashboardPage />} />
          <Route path="/severity-check" element={<SeverityCheck />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
