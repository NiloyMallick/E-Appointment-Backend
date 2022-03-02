import React from "react";
import { Container } from "react-bootstrap";
import HeroImg from "../../components/HeroSection/HeroImg";
import "./AboutUS.css";

function AboutUS() {
  return (
    <div>
      <Container className="aboutUsContainer">
        <HeroImg imgSrc="static/about.gif" />
        <div className="about-container">
          <div class="row">
            <div class="col-lg-12">
              <h1>About OS-IT</h1>
              <div className="section1">
                <p className="sectionPara">
                  OS IT Solutions Limited is a full-service IT solution
                  provider, committed to provide the best affordable solutions
                  for your business need. We are the leader when it comes to
                  e-commerce, web portal, website, Mobile App design and
                  development. We are always setting new benchmark and exceeding
                  the expectations of our customers and clients. We have
                  provided services for country’s top performing companies/
                  institutions and as the result have shown, achieved and
                  exceeded even their expectations.
                </p>
                <img className="sectionImg" src="static/u13.gif" alt="" />
              </div>
              <div className="section2">
                <img className="sectionImg" src="static/u13.gif" alt="" />
                <p className="sectionPara">
                  OurVision To empower organizations for better customer
                  experience using technology, process and people. Its goals
                  also include being the first choice among customers and
                  employees.
                </p>
              </div>
              <div className="section1">
                <p className="sectionPara">
                  Our Mission 
                  Partnering with clients to master their challenges
                  through people, services and solutions.
                </p>
                <img className="sectionImg" src="static/u13.gif" alt="" />
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutUS;
