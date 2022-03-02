import React from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./ContactForm.css";
import useForm from "./useForm";
import validate from "./ValidateInfo";

const ContactForm = (props) => {
  console.log("==> props Contactform: ", props);
  const { handleChange, handleSubmit, values, error, setValues } = useForm(
    props,
    validate
  );
  console.log("values: ", values);
  return (
    <div className="container" id="formContiner">
      <div className="contact-form">
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="contact-form-title">
            <h2 >
              GET IN TOUCH
             
            </h2>
            <p>Just enter your details bellow And we'll reach you soon.</p>
          </div>
          <div className="input">
            <input
              id="fname"
              type="text"
              name="fName"
              className="input-field"
              value={values.fName}
              onChange={handleChange}
              required
            />
            <label htmlFor="fname" className="input-label">
              First Name
            </label>
          </div>

          <div className="input">
            <input
              id="lname"
              type="text"
              name="lName"
              className="input-field"
              value={values.lName}
              onChange={handleChange}
              required
            />

            <label htmlFor="lname" className="input-label">
              Last Name
            </label>
          </div>
          <PhoneInput
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: true
            }}
            country={'us'}
            value={values.phone}
            onChange={(phone, country, e, fv) => {
              setValues({...values, phone: fv, country: country.name});
            }}
          />

          <div className="input">
            <input
              id="email"
              type="email"
              name="email"
              className="input-field"
              value={values.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" className="input-label">
              Email
            </label>
            {error.email && (
              <p data-tooltip="Invalid Email Address">{error.email}</p>
            )}
          </div>
          <div className="input">
            <textarea
              id="response"
              type="placeholder"
              name="response"
              className="input-field"
              value={values.response}
              onChange={handleChange}
              required
            />

            <label htmlFor="Message" className="input-label">
              Enter Your Message Here
            </label>
          </div>


          <div className="card-info">
            <input
              className="checkbox"
              type="checkbox"
              id="terms"
              value="agree"
              required
            />
            <label className="checkboxinfo" htmlfor="terms">
              Check Me
            </label>
          </div>
          <div className="action">
            <button className="action-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
