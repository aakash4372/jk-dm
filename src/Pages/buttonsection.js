import React from "react";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Pages.css";

const ProjectPlan = () => {
  return (
    <div 
      className="project-container"
      
    >
      <div className="container text-center pt-4 pb-5">
        <motion.div 
          className="text-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} // Triggers only when in viewport
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2>Plan the Project</h2>
          <p className="text-center">Boost your digital presence with a strategic marketing approach.</p>
        </motion.div>
        
        <motion.div 
          className="button-container text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }} // Triggers only when in viewport
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button 
            className="consult-button"
            whileHover={{ scale: 1.1 }} // Button hover effect
            whileTap={{ scale: 0.95 }} // Button click effect
          >
            <FaRocket className="icon" /> Click to connect
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPlan;
