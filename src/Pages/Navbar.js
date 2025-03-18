import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Offcanvas, Container } from "react-bootstrap";
import { BiMenuAltRight } from "react-icons/bi"; // Custom toggle icon
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages.css";

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

  // Close Offcanvas if screen size is >= 992px
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
      {/* Main Navbar Wrapped in Container */}
      <Navbar expand="lg" className="py-2" style={{ backgroundColor: "white" }}>

          {/* Logo */}
          <Navbar.Brand href="#" className="fw-bold d-flex align-items-center ps-lg-5">
            <img
              src="img/logo.png" // Replace with your logo path
              alt="Logo"
              style={{ height: "55px", marginRight: "10px" }}
            />
          </Navbar.Brand>

          {/* Custom Offcanvas Toggle Button */}
          <button className="toggle-btn d-lg-none ms-auto" onClick={handleShow}>
            <BiMenuAltRight size={32} color="#ba4599" className={`menu-icon ${show ? "rotate-icon" : ""}`} />
          </button>

          {/* Desktop Navbar Links */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end d-none d-lg-flex pe-5">
            <Nav className="gap-4">
              <Nav.Link href="#home">Home</Nav.Link>

              {/* Services Dropdown (Hover Effect) */}
              <NavDropdown
                title="Services"
                id="services-dropdown"
                show={dropdownOpen}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="position-relative"
              >
                <NavDropdown.Item href="#">GRAPHIC DESIGNING</NavDropdown.Item>
                <NavDropdown.Item href="#">VIDEO EDITING</NavDropdown.Item>
                <NavDropdown.Item href="#">MOTION GRAPHIC</NavDropdown.Item>
                <NavDropdown.Item href="#">DIGITAL MARKETING</NavDropdown.Item>
                <NavDropdown.Item href="#">MAGAZINE DESIGNING</NavDropdown.Item>
                <NavDropdown.Item href="#">WEBSITE DEVELOPMENT</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas show={show} onHide={handleClose} placement="end" className="custom-offcanvas">
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Nav className="flex-column gap-4">
            <Nav.Link href="#home" onClick={handleClose}>Home</Nav.Link>

            {/* Services Dropdown in Offcanvas */}
            <NavDropdown title="Services" id="offcanvas-services-dropdown">
              <NavDropdown.Item href="#" onClick={handleClose}>GRAPHIC DESIGNING</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleClose}>VIDEO EDITING</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleClose}>MOTION GRAPHIC</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleClose}>DIGITAL MARKETING</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleClose}>MAGAZINE DESIGNING</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleClose}>WEBSITE DEVELOPMENT</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Custom CSS for Button Styling */}
      <style>{`
        .toggle-btn {
          background: none; /* Remove background */
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
  