import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <Container>
        <img
          src="https://i.ibb.co/NyWqMkv/taiba-treading-banner.png"
          alt=""
          className="rafat-banner-size rounded-3"
        />
      </Container>
    </section>
  );
};

export default Banner;
