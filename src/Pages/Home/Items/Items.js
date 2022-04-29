import React from "react";
import Item from "../Item/Item";

const Items = () => {
  return (
    <section className="my-5">
      <h1 className="text-primary text-center display-6 fw-bold">All Items</h1>
      <div>
        <Item></Item>
      </div>
    </section>
  );
};

export default Items;
