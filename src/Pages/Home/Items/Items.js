import React from "react";
import { Row } from "react-bootstrap";
import Item from "../Item/Item";

const Items = () => {
  return (
    <section className="my-5">
      <h1 className="text-primary text-center display-6 fw-bold">All Items</h1>
      <div>
        <Row xs={1} md={3} className="g-4">
          <Item></Item>
        </Row>
      </div>
    </section>
  );
};

export default Items;
