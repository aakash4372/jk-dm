import React, { useState, useRef } from "react";
import Lottie from "react-lottie";
import animationData from "./business-analysis.json"; // Your Lottie JSON file
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import { motion, useInView } from "framer-motion"; // Framer Motion
import "./Pages.css";
import OurStory from "./Ourstory"; // Import OurStory Component

const HeroSection = () => {
  const heroRef = useRef(null); // Reference for the section
  const storyRef = useRef(null); // Reference for OurStory section
  const isInView = useInView(heroRef, { triggerOnce: true, margin: "-10px" }); // Trigger when visible
  const [showStory, setShowStory] = useState(false); // State for showing OurStory

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleShowStory = () => {
    setShowStory(true);
    setTimeout(() => {
      storyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); // Delay ensures the component is rendered before scrolling
  };

  return (
    <>
      <div className="hero-section" ref={heroRef}>
        <div className="container py-4">
          <div className="row align-items-center">
            {/* Lottie Animation Section */}
            <motion.div
              className="col-12 col-md-6 order-md-2 d-flex justify-content-center"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1.2 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Lottie options={defaultOptions} isClickToPauseDisabled={true}  />
            </motion.div>

            {/* Text and Button Section */}
            <div className="col-12 col-md-6 order-md-1 text-center text-md-start mt-4 mt-md-0">
              <motion.h4
                className="fw-bold display-3 animated-text"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                We
              </motion.h4>

              <motion.h4
                className="fw-bold display-4 animated-text"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Digital Partner
              </motion.h4>

              <motion.p
                className="lead mb-4 animated-text"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                Digital Marketing is no longer an option but a necessity.
              </motion.p>

              {/* Button to Show Our Story */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.7 }}
              >
                <Button className="custom-btn mb-3" onClick={handleShowStory}>
                  <span className="btn-text">Our Story</span>
                  <span className="divider"></span>
                  <FiCheckCircle className="btn-icon" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Show OurStory when the button is clicked */}
      {showStory && (
        <div ref={storyRef}>
          <OurStory />
        </div>
      )}
    </>
  );
};

export default HeroSection;
