import React from "react";
import classes from "./Button.module.css";

const Button1 = (props) => {
  return <button onClick={props.onSubmit} className={classes.btn1}>{props.children}</button>;
};

export default Button1;
