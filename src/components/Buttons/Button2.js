import React from "react";
import classes from "./Button.module.css";

const Button2 = (props) => {
  return <button className={classes.btn2}>{props.children}</button>;
};

export default Button2;
