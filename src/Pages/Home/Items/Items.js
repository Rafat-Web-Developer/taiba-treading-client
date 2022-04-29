import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section className="my-5">
      <h1 className="text-primary text-center display-6 fw-bold mb-5">
        All Items
      </h1>
      <div>
        <Row xs={1} md={3} className="g-4">
          {items.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Items;
