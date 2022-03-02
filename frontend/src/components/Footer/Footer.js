import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/AboutUs">How we work</Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/ContactUs">Contact</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <Link to="">Watch Video</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                E-Appointment
              </Link>
            </div>
            <div className="social-icons">
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
              <Link
                className="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="footer-2">
        <p class="col">
          Copyright ©2021 All rights reserved | IT Partner
          <a target="_blank" href="http://www.ositsltd.com/index.html" rel="noreferrer">
            <img className="ositimg" src="http://www.ositsltd.com/images/os%20logolatest2.png" alt="osit" />
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
