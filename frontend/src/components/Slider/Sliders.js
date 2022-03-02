import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "../Card/Cards";

export default class Sliders extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      // centerPadding: "60px",
      leftPdding:"40px",
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
          
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
          
        }
      ]
    };

    return (
      <div className="Slider">
      <div className="sliderContainer">
        <Slider {...settings}>
          <div>
            <Cards
              title="Accept online bookings"
              imgSrc="static/3959915.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
            />
          </div>
          <div>
            <Cards
              title="Notifications via SMS/Email"
              imgSrc="static/3675555.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
            />
          </div>
          <div>
            <Cards
              title="Reminders"
              imgSrc="static/3053910.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
            />
          </div>
          <div>
            <Cards
              title="Booking Widget"
              imgSrc="static/4703428.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
            />
          </div>
          <div>
            <Cards
              title="Email Notification"
              imgSrc="static/8400.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
            />
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}
