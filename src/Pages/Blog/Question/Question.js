import React from "react";
import { Card } from "react-bootstrap";

const Question = ({ qAData }) => {
  const { question, answer } = qAData;
  return (
    <Card className="my-2">
      <Card.Header className="bg-dark text-primary fw-bold fs-5">
        {question}
      </Card.Header>
      <Card.Body className="fw-bold">{answer}</Card.Body>
    </Card>
  );
};

export default Question;
