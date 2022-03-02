import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutUS from "./containers/AboutUs/AboutUS";
import ContactUs from "./containers/AboutUs/ContactUs";
import AdminDashboard from "./containers/Dashboard/AdminDashboard";
import AppointeeDashboard from "./containers/Dashboard/AppointeeDashboard";
import EmployeeDashboard from "./containers/Dashboard/EmployeeDashboard";
import Home from "./containers/Home/Home";
import LoginAndSignup from './containers/LoginandSignup/LoginAndSignup';
import Logout from "./containers/LoginandSignup/logout";
import Resetpassword from "./containers/PasswordReset/ResetPassword";
import ResetPasswordConfirm from "./containers/PasswordReset/ResetPasswordConfirm";
import Verfication from "./containers/Verification/Activate";

const base_url = "";

const App = () => (
  <Router>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/employeedashboard"
        element={<EmployeeDashboard base_url={base_url} />}
      />
      <Route
        exact
        path="/appointeedashboard"
        element={<AppointeeDashboard base_url={base_url} />}
      />
      <Route
        exact
        path="/admindashboard"
        element={<AdminDashboard base_url={base_url} />}
      />
      <Route
        exact
        path="/contactus"
        element={<ContactUs base_url={base_url} />}
      />
      <Route exact path="/aboutus" element={<AboutUS />} />
      <Route exact path="/contactus" element={<ContactUs />} />
      <Route
        exact
        path="/reset-password"
        element={<Resetpassword base_url={base_url} />}
      />
      <Route
        exact
        path="/password/reset/confirm/:uid/:token"
        element={<ResetPasswordConfirm base_url={base_url} />}
      />
      <Route
        exact
        path="activate/:uid/:token"
        element={<Verfication base_url={base_url} />}
      />
      <Route
        exact
        path="/loginandsignup"
        element={<LoginAndSignup base_url={base_url} />}
      />
      <Route exact path="/logout" element={<Logout base_url={base_url} />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
