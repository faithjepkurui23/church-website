
import React from "react";
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-container">
     
      <Header />

      <div className="main-content">
        
        <Sidebar />

        
        <div className="page-content">
          <Routes>
            
            <Route
              path="/"
              element={
                <div className="app-main">
                  <h1>Welcome to Our Church Website</h1>
                  <p>“A place of worship, community, and love.”</p>
                  <p>This is the starting point of your beautiful church website.</p>
                </div>
              }
            />

            
            <Route path="/dashboard" element={<Dashboard />} />

            
            <Route path="/sermons" element={<Sermons />} />

            
            <Route path="/events" element={<Events />} />

            
            <Route path="/about" element={<About />} />

           
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

      <Footer>
        <p>© 2025 Church Name. All rights reserved.</p>
      </Footer>
    </div>
  );
}

export default App;
