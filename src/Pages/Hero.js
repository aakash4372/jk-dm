import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./business-analysis.json"; // Your Lottie JSON file
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import "./Pages.css";
import OurStory from "./Ourstory";

const HeroSection = () => {
  const [showStory, setShowStory] = useState(false);

  const handleShowStory = () => {
    setShowStory(true);

    // Smooth Scroll to Our Story Section
    setTimeout(() => {
      document.getElementById("our-story-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="hero-section">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Lottie Animation Section */}
          <div className="col-12 col-md-6 order-md-2 d-flex justify-content-center">
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
          </div>

          {/* Text and Button Section */}
          <div className="col-12 col-md-6 order-md-1 text-center text-md-start mt-4 mt-md-0">
            <h4 className="fw-bold display-3 animated-text">We</h4>
            <h4 className="fw-bold display-4 animated-text" style={{ animationDelay: "0.3s" }}>
              Digital Partner
            </h4>
            <p className="lead mb-4 animated-text" style={{ animationDelay: "0.6s" }}>
              Digital Marketing is no longer an option but a necessity.
            </p>

            {/* Button to Show Our Story */}
            <Button className="custom-btn mb-3" onClick={handleShowStory}>
              <span className="btn-text">Our Story</span>
              <span className="divider"></span>
              <FiCheckCircle className="btn-icon" />
            </Button>
          </div>
        </div>
      </div>

      {/* Our Story Section - Initially Hidden */}
      {showStory && (
        <div id="our-story-section" className="our-story-container">
          <OurStory />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
