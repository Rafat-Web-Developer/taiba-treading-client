import React from "react";
import { Button } from "react-bootstrap";

const EmailVerification = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{ height: "400px" }}
    >
      <div className="text-center">
        <h3 className="text-danger mb-3 display-6">Please verify your email</h3>
        <Button variant="primary">Send Verification Email</Button>
      </div>
    </section>
  );
};

export default EmailVerification;
