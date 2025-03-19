import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Pages.css";

const colors = [
  "#f3c571", // Light Pink
  "#c4c3fb", // Soft Green
  "#F6D6AD", // Light Orange
  "#ffc0be", // Soft Red
  "#A2D2FF", // Mild Blue
  "#B5EAD7", // Pastel Green
  "#FFDAC1"  // Light Peach
];

const FallingText = ({ words = [], highlightClass = "highlighted" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="falling-text-container">
      {words.map((word, index) => {
        const randomRotation = (Math.random() - 0.5) * 20;
        const bgColor = colors[index % colors.length];

        return (
          <motion.div
            key={index}
            className={`falling-box ${highlightClass}`}
            style={{ backgroundColor: bgColor }}
            initial={{ y: "-100vh", opacity: 0, rotate: randomRotation }}
            animate={isInView ? { y: 0, opacity: 1, rotate: randomRotation } : {}}
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

const Whatwedo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      AOS.init({ duration: 1200 });
    }
  }, [isInView]);

  return (
    <div className="whatwedo-section meet-the-team-section" ref={sectionRef}>
      <Container className="my-5">
        <Row className="align-items-center">
          {/* Left Side: Content */}
          <Col md={6}>
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              What We Do
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              We help businesses grow online through targeted strategies, including SEO, social media, and paid advertising. Our expert team creates engaging content to boost brand visibility and customer engagement. We optimize websites for better rankings and drive traffic through data-driven campaigns. From lead generation to conversion, we ensure maximum ROI for your business.
            </motion.p>
          </Col>

          {/* Right Side: GIF */}
          <Col md={6} className="text-center">
            <motion.img
              src="img/marketing.gif" // Replace with your actual GIF path
              alt="G.R.O.W. Lead System" 
              className="img-fluid"
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut"}}
            />

          </Col>
        </Row>

        {/* Falling Text Animation */}
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
      </Container>
      <div className="bottom-wave"></div>
    </div>
  );
};

export default Whatwedo;
