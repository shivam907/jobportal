import React from "react";
import classes from "./Input.module.css";

const TextArea = (props) => {
  return (
    <div className={classes.inputs}>
      <label htmlFor="">{props.label}</label>
      <textarea
        className={classes.textarea}
        type={props.type}
        onChange={props.onSubmit}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextArea;
