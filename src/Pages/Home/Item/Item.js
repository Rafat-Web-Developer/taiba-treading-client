import React from "react";
import { Card, Col } from "react-bootstrap";

const Item = ({ item }) => {
  const { name, price, img } = item;
  return (
    <Col>
      <Card className="shadow-lg">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
