import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Pages.css"; // Optional: For custom styling

const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000}); // Initialize AOS
  }, []);

  return (
    <motion.div 
      className="our-story-section py-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div 
            className="col-12 col-md-6 d-flex justify-content-center"
            data-aos="fade-right" // AOS Animation for the image
          >
            <motion.img 
              src='img/idea1.png' 
              alt="Our Story" 
              className="img-fluid rounded"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Right Side: Text */}
          <div 
            className="col-12 col-md-6"
            data-aos="fade-left" // AOS Animation for the text
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold mb-4">Our Story</h2>
              <p>
                Digitokmedia’s vision is to Brand your brand as your digital partner.
                Our dedicated team has years of experience in the digital industry
                and uses strategic brainstorming and creative solutions to effectively
                enhance your brand’s visibility. Through innovative marketing techniques,
                we aim to amplify your brand’s presence and promote lasting engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurStory;
