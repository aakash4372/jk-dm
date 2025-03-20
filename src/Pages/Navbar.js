import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages.css";

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShow(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar expand="lg" className="py-2" style={{ backgroundColor: "white" }}>
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center ps-lg-5">
          <img src="img/logo.png" alt="Logo" style={{ height: "55px", marginRight: "10px" }} />
        </Navbar.Brand>

        <button className="toggle-btn d-lg-none ms-auto" onClick={handleShow}>
          <BiMenuAltRight size={32} color="#ba4599" className={`menu-icon ${show ? "rotate-icon" : ""}`} />
        </button>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end d-none d-lg-flex pe-5">
          <Nav className="gap-4">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown
              title="Services"
              id="services-dropdown"
              show={dropdownOpen}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <NavDropdown.Item as={Link} to="/graphic-design">GRAPHIC DESIGNING</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/video-editing">VIDEO EDITING</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/motion-graphic">MOTION GRAPHIC</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/digital-marketing">DIGITAL MARKETING</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/magazine-design">MAGAZINE DESIGNING</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/web-development">WEBSITE DEVELOPMENT</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/branding">BRANDING</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="custom-offcanvas">
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Nav className="flex-column gap-4">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
            <NavDropdown title="Services" id="offcanvas-services-dropdown">
              <NavDropdown.Item as={Link} to="/graphic-design" onClick={handleClose}>GRAPHIC DESIGNING</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/video-editing" onClick={handleClose}>VIDEO EDITING</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/motion-graphic" onClick={handleClose}>MOTION GRAPHIC</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/digital-marketing" onClick={handleClose}>DIGITAL MARKETING</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/magazine-design" onClick={handleClose}>MAGAZINE DESIGNING</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/web-development" onClick={handleClose}>WEBSITE DEVELOPMENT</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/branding" onClick={handleClose}>BRANDING</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <style>{`
        .toggle-btn {
          background: none;
          border: none;
          padding: 5px;
          cursor: pointer;
          outline: none;
          transition: transform 0.3s ease-in-out;
        }
        .toggle-btn:focus {
          outline: none;
          box-shadow: none;
        }
        .menu-icon {
          transition: transform 0.3s ease-in-out;
        }
        .rotate-icon {
          transform: rotate(90deg);
        }
      `}</style>
    </>
  );
};

export default CustomNavbar;
