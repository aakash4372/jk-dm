import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Homepage from "./mainfile/Homepage";
import Graphicsection from "./mainfile/Graphicsection";




export default function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<><Homepage /></>} />
        <Route path="/graphic-design" element={<><Graphicsection/></>} />
        <Route path="/video-editing" element={<></>} />
        <Route path="/motion-graphic" element={<></>} />
        <Route path="/digital-marketing" element={<></>} />
        <Route path="/magazine-design" element={<></>} />
        <Route path="/web-development" element={<></>} />
        <Route path="/branding" element={<></>} />
        <Route path="/contact" element={<div className="mt-5">dfaffasfdf</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}
