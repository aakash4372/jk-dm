import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Offcanvas, Badge, Button } from "react-bootstrap";
import { List } from "react-bootstrap-icons"; // React Bootstrap icons

const CustomNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Main Navbar */}
      <Navbar expand="lg" className="py-2 px-3" style={{ backgroundColor: "white" }}>
        {/* Logo */}
        <Navbar.Brand href="#" className="fw-bold d-flex align-items-center">
          <img
            src="img/logo.png" // Replace with your logo path
            alt="Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
        </Navbar.Brand>

        {/* Offcanvas Toggle Button */}
        <Button variant="light" className="d-lg-none ms-auto" onClick={handleShow}>
          <List size={28} />
        </Button>

        {/* Desktop Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end d-none d-lg-flex">
          <Nav>
            <Nav.Link href="#" className="text-danger fw-bold">Home</Nav.Link>

            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#">One</NavDropdown.Item>
              <NavDropdown.Item href="#">Two</NavDropdown.Item>
              <NavDropdown.Item href="#">Three</NavDropdown.Item>
              <NavDropdown.Item href="#">Four</NavDropdown.Item>
              <NavDropdown.Item href="#">Five</NavDropdown.Item>
              <NavDropdown.Item href="#">Six</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-danger fw-bold">Home</Nav.Link>

            {/* Services Dropdown in Offcanvas */}
            <NavDropdown title="Services" id="offcanvas-services-dropdown">
              <NavDropdown.Item href="#">One</NavDropdown.Item>
              <NavDropdown.Item href="#">Two</NavDropdown.Item>
              <NavDropdown.Item href="#">Three</NavDropdown.Item>
              <NavDropdown.Item href="#">Four</NavDropdown.Item>
              <NavDropdown.Item href="#">Five</NavDropdown.Item>
              <NavDropdown.Item href="#">Six</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
