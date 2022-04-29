import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate("/login");
  };

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Taiba-Treading</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/manageItems">
                Manage Items
              </Nav.Link>
              <Nav.Link as={Link} to="/myItems">
                My Items
              </Nav.Link>
              <Button
                onClick={handleLoginButton}
                variant="info"
                className="fw-bold text-white"
              >
                Login
              </Button>
              <Button variant="danger" className="fw-bold">
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
