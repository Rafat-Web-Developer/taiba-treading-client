import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { _id, name, price, description, image } = item;
  const navigate = useNavigate();

  const handleUpdateBtn = (id) => {
    const url = `/updateItem/${id}`;
    navigate(url);
  };

  return (
    <Col>
      <Card className="shadow-lg">
        <Card.Img variant="top" src={image} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={() => handleUpdateBtn(_id)}>
            Update
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
