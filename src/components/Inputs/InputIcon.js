"use client";
import React from "react";
import classes from "./Input.module.css"

const InputIcon = (props) => {
  return (

    <div className={classes.inputs}>
      <label htmlFor="">{props.label}</label>
    <input
      className={classes.input1}
      type={props.type}
      onChange={props.onSubmit}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
    </div>
  );
};

export default InputIcon;
