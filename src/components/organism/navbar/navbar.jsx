import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.scss";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <Navbar  bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand >TO-DOS Draketech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Link className="m-2" to="/home">HOME</Link> 
            <Link className="m-2" to="/todos">TO-DOS</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
