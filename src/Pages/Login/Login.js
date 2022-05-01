import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/manageItems");
  }

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

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
            <div>
              {error && <p className="text-danger">{error?.message}</p>}
              <div className="mb-3 mt-4 d-flex align-items-center justify-content-center">
                <p className="w-25 bg-primary" style={{ height: "2px" }}></p>
                <p className="text-primary fw-bold mx-2">Or</p>
                <p className="w-25 bg-primary" style={{ height: "2px" }}></p>
              </div>
              <Button
                variant="success"
                onClick={handleGoogleLogin}
                type="button"
                className="w-100 fw-bold"
              >
                Sign in with Google
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Login;
