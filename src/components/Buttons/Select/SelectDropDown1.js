"use client";
import React from "react";
import Select from "react-select";
import classes from "./Select.module.css";

const SelectDropDown1 = (props) => {
  return (
    <div className={classes.inputs}>
      <label htmlFor="">{props.label}</label>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            //   borderColor: state.isFocused ? 'grey' : 'red',
            fontSize: "18px",
            //   padding: "5px 10px",
            color: "red",
            backgroundColor: "transparent",
            border: "none",
            width: "100px",
          }),
          option: (styles, { data }) => ({
            ...styles,
            fontSize: "16px",
            //   backgroundColor: "transparent"
          }),
        }}
        className={classes.select}
        options={props.data}
      />
    </div>
  );
};

export default SelectDropDown1;
