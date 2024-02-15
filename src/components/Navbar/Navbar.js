import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <nav>
        <h1>LOGO</h1>
        <div className={classes.navelements}>
          <div className={classes.nav1}>
            <div className={classes.navel}>About</div>
            <div className={classes.navel}>Companies</div>
            <div className={classes.navel}>Jobs</div>
            <div className={classes.navel}>Carrers</div>
            <div className={classes.navel}>Carrers</div>
          </div>
          <div className={classes.nav2}>
            <div className={classes.btn1}>Login</div>
            <div className={classes.btn2}>Register</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
