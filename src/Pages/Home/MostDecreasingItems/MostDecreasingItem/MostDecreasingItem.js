import React from "react";
import { Card, Col } from "react-bootstrap";

const MostDecreasingItem = ({ itemData }) => {
  const { image, name } = itemData;
  return (
    <Col>
      <Card>
        <Card.Header className="fw-bold text-primary">{name}</Card.Header>
        <Card.Body className="text-center">
          <img
            src={image}
            className="img-fluid"
            alt="Item_img"
            style={{ height: "100px" }}
          />
        </Card.Body>
        <Card.Footer className="text-center">
          <p className="fw-bold fs-4 text-primary">
            <span className="me-1">*</span>
            <span className="me-1">*</span>
            <span className="me-1">*</span>
            <span className="me-1">*</span>
            <span className="me-1">*</span>
          </p>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default MostDecreasingItem;
