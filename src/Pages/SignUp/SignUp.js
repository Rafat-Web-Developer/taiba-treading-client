import React from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
const SignUp = () => {
  return (
    <section className="my-5">
      <Container>
        <Card className="rafat-form-resize mx-auto">
          <Card.Header className="bg-primary text-white fw-bold">
            Create your new account
          </Card.Header>
          <Card.Body className="py-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter your password again"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="fw-bold w-100 mt-3"
              >
                Sign up
              </Button>
              <p className="my-2">
                Already have an account{" "}
                <Link
                  to="/login"
                  className="text-decoration-none fw-bold text-primary"
                >
                  Login
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

export default SignUp;
