import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner/Banner";
import Items from "./Items/Items";

const Home = () => {
  return (
    <main className="my-5">
      <Container>
        <Banner></Banner>
        <Items></Items>
      </Container>
    </main>
  );
};

export default Home;
