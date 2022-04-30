import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
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
              <p className="my-2">
                Create a new account{" "}
                <Link
                  to="/signUp"
                  className="text-decoration-none fw-bold text-primary"
                >
                  SignUp
                </Link>{" "}
              </p>
            </Form>
            <SocialLogin></SocialLogin>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Login;
