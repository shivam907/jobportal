"use client";
import React from "react";
import classes from "./Input.module.css";

const TextArea1 = (props) => {
  return (

    <div className={classes.inputs}>
      <label htmlFor="">{props.label}</label>
    <textarea
      className={classes.textarea1}
      type={props.type}
      onChange={props.onSubmit}
      placeholder={props.placeholder}
    />
    </div>
  );
};

export default TextArea1;
