import React from "react";
import { FaRocket } from "react-icons/fa"; // Import Rocket Icon
import "./Pages.css";

const ProjectPlan = () => {
  return (
    <div className="project-container">
      <div className="text-content">
        <h2>Plan the Project</h2>
        <p>Boost your digital presence with a strategic marketing approach.</p>
      </div>
      <div className="button-container">
        <button className="consult-button">
          <FaRocket className="icon" /> Free Consultation
        </button>
      </div>
    </div>
  );
};

export default ProjectPlan;
