import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate("/login");
  };

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Taiba-Treading</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/manageItems">
                Manage Items
              </Nav.Link>
              <Nav.Link as={Link} to="/addItem">
                Add Item
              </Nav.Link>
              <Nav.Link as={Link} to="/myItems">
                My Items
              </Nav.Link>
              {user ? (
                <Button
                  variant="danger"
                  className="fw-bold"
                  onClick={handleSignOut}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  onClick={handleLoginButton}
                  variant="info"
                  className="fw-bold text-white"
                >
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
