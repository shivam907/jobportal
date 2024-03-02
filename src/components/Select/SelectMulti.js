"use client";
import React from "react";
import Select from "react-select";
import classes from "./Select.module.css";
import makeAnimated from "react-select/animated";

const SelectMulti = (props) => {
  const animatedComponents = makeAnimated();
  return (
    <div className={classes.inputs}>
      <label htmlFor="">{props.label}</label>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            //   border:"none",
            //   outline:"none",
            // borderColor: state.isActive ? 'grey' : 'red',
            fontSize: "16px",
            padding: "5px 10px",
            width: "100%",
            color: "black",
            backgroundColor: "transparent",
          }),
          option: (styles, { data }) => ({
            ...styles,
            fontSize: "16px",
            //   border:"none",
            //   outline:"none"
            //   backgroundColor: "transparent"
          }),
        }}
        className={classes.select}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        onChange={props.onChange}
        classNamePrefix="ok"
        placeholder={props.placeholder}
        options={props.data}
      />
    </div>
  );
};

export default SelectMulti;
