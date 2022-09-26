import React from "react";
import "../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_custom">
            <Link to="/add">Add Products</Link>
            <Link to="/update">Update Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
