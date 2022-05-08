import React from "react";
import { Button, Form } from "react-bootstrap";

const ContactInfo = () => {
  return (
    <section className="mt-5 mb-2 bg-dark py-5">
      <h1 className="text-primary text-center display-6 fw-bold mb-5">
        Contact With Us
      </h1>
      <div className="rafat-form-resize mx-auto">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Control
              type="text"
              name="number"
              placeholder="Enter your mobile number"
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            className="fw-bold w-100 mt-3"
          >
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ContactInfo;
