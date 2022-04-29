import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <section className="my-5">
      <Container>
        <Card className="rafat-form-resize mx-auto">
          <Card.Header className="bg-primary text-white fw-bold">
            Login Form
          </Card.Header>
          <Card.Body className="py-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="fw-bold w-100 mt-3"
              >
                Login
              </Button>
              <div className="mb-3 mt-4 d-flex align-items-center justify-content-center">
                <p className="w-25 bg-primary" style={{ height: "2px" }}></p>
                <p className="text-primary fw-bold mx-2">Or</p>
                <p className="w-25 bg-primary" style={{ height: "2px" }}></p>
              </div>
              <Button variant="success" type="submit" className="w-100 fw-bold">
                Google
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Login;
