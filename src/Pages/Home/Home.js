import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner/Banner";
import ContactInfo from "./ContactInfo/ContactInfo";
import Items from "./Items/Items";
import MostDecreasingItems from "./MostDecreasingItems/MostDecreasingItems";

const Home = () => {
  return (
    <main className="mt-5">
      <Container>
        <Banner></Banner>
        <Items></Items>
        <MostDecreasingItems></MostDecreasingItems>
      </Container>
      <ContactInfo></ContactInfo>
    </main>
  );
};

export default Home;
