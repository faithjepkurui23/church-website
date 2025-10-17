import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Home page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="main-content">
                <Home />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/home"
          element={
            <>
              <Header />
              <div className="main-content">
                <Home />
              </div>
              <Footer />
            </>
          }
        />

        {/* ℹ️ About page */}
        <Route
          path="/about"
          element={
            <>
              <Header />
              <div className="main-content">
                <About />
              </div>
              <Footer />
            </>
          }
        />

        {/* 📅 Events page */}
        <Route
          path="/events"
          element={
            <>
              <Header />
              <div className="main-content">
                <Events />
              </div>
              <Footer />
            </>
          }
        />

        {/* 📖 Sermons page */}
        <Route
          path="/sermons"
          element={
            <>
              <Header />
              <div className="main-content">
                <Sermons />
              </div>
              <Footer />
            </>
          }
        />

        {/* 📞 Contact page */}
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <div className="main-content">
                <Contact />
              </div>
              <Footer />
            </>
          }
        />

        {/* 🧭 Dashboard layout */}
        <Route
          path="/dashboard"
          element={
            <div className="dashboard-layout">
              <Sidebar />
              <div className="dashboard-content">
                <Dashboard />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
