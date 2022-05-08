import React from "react";
import { Row } from "react-bootstrap";
import useItems from "../../../hooks/useItems";
import MostDecreasingItem from "./MostDecreasingItem/MostDecreasingItem";

const MostDecreasingItems = () => {
  const [items, setItems] = useItems();
  const threeItems = items.slice(0, 3);

  return (
    <section>
      <h1 className="text-primary text-center display-6 fw-bold mb-5">
        Most Popular Items
      </h1>
      <Row xs={1} md={3} className="g-4">
        {threeItems.map((item) => (
          <MostDecreasingItem
            key={item._id}
            itemData={item}
          ></MostDecreasingItem>
        ))}
      </Row>
    </section>
  );
};

export default MostDecreasingItems;
