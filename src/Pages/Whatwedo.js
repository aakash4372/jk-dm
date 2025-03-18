import './Pages.css';
import React from 'react';

const FallingText = () => {
  const services = [
    "GRAPHIC DESIGNING",
  ];

  return (
    <div className="falling-text-container">
      {services.map((service, index) => (
        <div key={index} className="falling-text">
          {service}
        </div>
      ))}
    </div>
  );
};

export default FallingText;