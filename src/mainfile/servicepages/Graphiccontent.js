import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../main.css';

const sections = [
  {
    id: 1,
    title: "Showcase your brand beautifully with our services",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    imgSrc: "img/idea.png", // Update with actual image path
  },
  {
    id: 2,
    title: "The best digital marketing company we understand your needs",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    imgSrc: "img/idea.png", // Update with actual image path
  },
];

const ZigzagSection = () => {
  return (
    <Container className="zigzag-container">
      {sections.map((section, index) => (
        <Row
          key={section.id}
          className={`align-items-center my-5 ${
            index % 2 === 0 ? "flex-md-row" : "flex-md-row-reverse"
          } flex-column`}
        >
          <Col md={6} className="text-center text-md-start">
            <span className="badge text-white">{section.id}</span>
            <h2 className="fw-bold">{section.title}</h2>
            <p>{section.text}</p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={section.imgSrc}
              alt={section.title}
              className="img-fluid"
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default ZigzagSection;
