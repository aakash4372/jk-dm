import React from "react";
import { motion } from "framer-motion";
import "./Pages.css"; // Optional: For custom styling

const OurStory = () => {
  return (
    <motion.div 
      className="our-story-section py-5 d-flex align-items-center justify-content-center"
      initial={{ opacity: 0, y: 50 }}  // Start invisible and move up
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true }} // Runs animation only once
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <h2 className="fw-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Digitokmedia’s vision is to Brand your brand as your digital partner. Our dedicated team has years of experience in the digital industry and uses strategic brainstorming and creative solutions to effectively enhance your brand’s visibility. Through innovative marketing techniques, we aim to amplify your brand’s presence and promote lasting engagement.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurStory;
