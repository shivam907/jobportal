import React from "react";
import classes from "./Navbar.module.css";
import Button1 from "../Buttons/Button1";
import Button2
 from "../Buttons/Button2";

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
          {/* <Button2>Login</Button2> */}
          <Button2>Register</Button2>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
