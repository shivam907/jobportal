import React from "react";
import classes from "./classes.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <footer>
        <div className={classes.col1}>
          <img className={classes.logo} src="/toid.png"/>
          <p>
            Unlock your potential and seize the opportunity to thrive. Join us as we embark on a journey of growth and innovation together.
          </p>
        </div>
        <div className={classes.col2}>
          <h1>Company</h1>
          <ul>
            <a href="https://cgcassignments.com">
              <li>CGC Assgn</li>
            </a>
          </ul>
        </div>
        <div className={classes.col2}>
          <h1>Resources</h1>
          <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/companies">
            <li>Companies</li>
          </Link>
          <Link href="/carrers">
            <li>Carrers</li>
          </Link>
          <Link href="/register">
            <li>Register</li>
          </Link>
          </ul>
        </div>
        <div className={classes.respcol}>
        <div className={classes.col4}>
          <h1>Company</h1>
          <ul>
            <a href="https://cgcassignments.com">
              <li>CGC Assgn</li>
            </a>
          </ul>
        </div>
        <div className={classes.col4}>
          <h1>Resources</h1>
          <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/companies">
            <li>Companies</li>
          </Link>
          <Link href="/carrers">
            <li>Carrers</li>
          </Link>
          <Link href="/register">
            <li>Register</li>
          </Link>
          </ul>
        </div>
        </div>
        <div className={classes.col3}>
          <h1>Contact Info</h1>
          <a href="mailto:cgcassgn@gmail.com">
          <p>
          cgcassgn@gmail.com
          </p>
          </a>
          <a href="mailto:verify.toid@gmail.com">
          <p>
          verify.toid@gmail.com
          </p>
          </a>
          <div className={classes.links}>
            <div className={classes.link}>
              <img src="./insta.svg" alt="" />
            </div>
            <div className={classes.link}>
              <img src="./whatsapp.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
