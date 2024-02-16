import React from "react";
import Select from "react-select";
import classes from "./Select.module.css";

import makeAnimated from "react-select/animated";
const SelectDropDown = (props) => {

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
            // borderSize: '20px',
            fontSize: "16px",
            padding: "5px 10px",
            width: "100%",
            color: "red",
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
        components={animatedComponents}
        onChange={props.onChange}
        //   closeMenuOnSelect={false}
        classNamePrefix="ok"
        placeholder={props.placeholder}
        options={props.data}
      />
    </div>
  );
};

export default SelectDropDown;
