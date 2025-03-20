import React, { useRef } from "react";
import Lottie from "react-lottie";
import animationData from "../lottiefiles/graphic.json"; // Your Lottie JSON file
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import { motion, useInView } from "framer-motion"; // Framer Motion


const Graphichome = () => {
  const heroRef = useRef(null); // Reference for the section
  const isInView = useInView(heroRef, { triggerOnce: true, margin: "-10px" }); // Trigger when visible

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
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
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
          </motion.div>

          {/* Text and Button Section */}
          <div className="col-12 col-md-6 order-md-1 text-center text-md-start mt-4 mt-md-0">
            <motion.h4
              className="fw-bold display-3 animated-text"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              Our
            </motion.h4>

            <motion.h4
              className="fw-bold display-4 animated-text"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Graphic Design 
            </motion.h4>

            <motion.p
              className="lead mb-4 animated-text"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Transforming visions into stunning designs.

            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <Button className="custom-btn mb-3">
                <span className="btn-text">Learn More</span>
                <span className="divider"></span>
                <FiCheckCircle className="btn-icon" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphichome;
