// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import "./HeroSection.css";

const HeroImg = (props) => {
  return (
    <div>
      <Container>
          <img className="heroImg" src={props.imgSrc} alt="Hero Image"/>    
      </Container>
    </div>
  );
};

export default HeroImg;
