import React from "react";
import { motion } from "framer-motion";
import "./Pages.css";

const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFBD33", "#57FF33", "#A133FF"
]; // Add more colors as needed

const FallingText = ({
  words = [],
  highlightClass = "highlighted",
}) => {
  return (
    <div className="falling-text-container">
      {words.map((word, index) => {
        const randomRotation = (Math.random() - 0.5) * 20; // Random rotation between -10 to 10 degrees
        const bgColor = colors[index % colors.length]; // Assign different colors cyclically

        return (
          <motion.div
            key={index}
            className={`falling-box ${highlightClass}`}
            style={{ backgroundColor: bgColor }}
            initial={{ y: "-100vh", opacity: 0, rotate: randomRotation }}
            animate={{ y: 0, opacity: 1, rotate: randomRotation }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            {word}
          </motion.div>
        );
      })}
    </div>
  );
};

function Fallingtext() {
  return (
    <div className="App">
      <FallingText
        words={[
          "GRAPHIC DESIGNING",
          "VIDEO EDITING",
          "MOTION GRAPHIC",
          "DIGITAL MARKETING",
          "MAGAZINE DESIGNING",
          "WEBSITE DEVELOPMENT",
          "BRANDING",
        ]}
        highlightClass="highlighted"
      />
    </div>
  );
}

export default Fallingtext;
