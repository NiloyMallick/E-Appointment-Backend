import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import HeroImg from "../../components/HeroSection/HeroImg";
import "./ContactUs.css";
const ContactUs = (props) => {
  const base_url = props.base_url;
  console.log("====>", base_url);
  return (
    <div>
      <Container className="contactUsContainer">
        <HeroImg imgSrc="static/contact.gif" />
        <div className="conatact-container">
          <div class="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <h1>Bangladesh Office Address
                <img className="bangladesh" src="static/bangladesh.svg" alt="BD FLAG"/>
              </h1>
              <div className="col-lg-7">
                <h3>Address:</h3>
                <p>
                  <i class="fas fa-home"></i> Suit 701, 6th Floor, Tools and
                  Technology Bhaban, Bangladesh Industrial Technical Assistance
                  Center (BITAC) Tejgoan Industrial Area, Dhaka 1208 (Dhaka,
                  Bangladesh)
                </p>
                <p>
                  <i class="fas fa-envelope"></i> info@ositsltd.com
                </p>
                <p>
                  <i class="fas fa-headset"></i> +8801988224411
                </p>
              </div>
              <div className="col-lg-12">
                <h3>Office Location:</h3>
                <GoogleMap />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ContactForm baseurl={base_url} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
