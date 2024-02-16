import React from "react";
import classes from "./classes.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <footer>
        <div className={classes.col1}>
          <h1>LOGO</h1>
          <p>
            We always make our seekers and companies find the best jobs and
            employers find the best candidates
          </p>
        </div>
        <div className={classes.col2}>
          <h1>Company</h1>
          <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>News</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className={classes.col2}>
          <h1>Resources</h1>
          <ul>
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={classes.col2}>
          <h1>Support</h1>
          <ul>
            <li>Events</li>
            <li>Promo</li>
            <li>Demo</li>
            <li>Carrers</li>
          </ul>
        </div>
        <div className={classes.col3}>
          <h1>Contact Info</h1>
          <p>contact@jobportal.com</p>
          <div className={classes.links}>
            <div className={classes.link}></div>
            <div className={classes.link}></div>
            <div className={classes.link}></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
