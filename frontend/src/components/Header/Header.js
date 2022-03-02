import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar-container">
      <Navbar className="nav" expand="lg" >
        <Container>
          <Navbar.Brand href="/">E-Appointment System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="navItem" to="/">
                <Nav.Item id="navlink">Home</Nav.Item>
              </Link>
              <Link className="navItem" to="/contactus">
                <Nav.Item id="navlink">Contact Us</Nav.Item>
              </Link>
              <Link className="navItem" to="/aboutus">
                <Nav.Item id="navlink">About Us</Nav.Item>
              </Link>
              <Link className="navItem" to="/loginandsignup">
                <Nav.Item id="navlink">Login/Registration</Nav.Item>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
