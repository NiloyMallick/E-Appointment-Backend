import React from "react";
import { Container } from "react-bootstrap";
import HeroSection from "./../../components/HeroSection/HeroSection";
import Sliders from "./../../components/Slider/Sliders";
import "./Home.css";

const Home = () => (
  <div>
    <HeroSection />
    <Container className="homecontainer">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="title">Explore Our Services</h1>
          <Sliders />
        </div>
      </div>
    </Container>
  </div>
);

export default Home;
