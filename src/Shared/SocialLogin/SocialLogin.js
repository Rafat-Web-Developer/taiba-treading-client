import React from "react";
import { Button } from "react-bootstrap";

const SocialLogin = () => {
  return (
    <div>
      <div className="mb-3 mt-4 d-flex align-items-center justify-content-center">
        <p className="w-25 bg-primary" style={{ height: "2px" }}></p>
        <p className="text-primary fw-bold mx-2">Or</p>
        <p className="w-25 bg-primary" style={{ height: "2px" }}></p>
      </div>
      <Button variant="success" type="button" className="w-100 fw-bold">
        Google
      </Button>
    </div>
  );
};

export default SocialLogin;
