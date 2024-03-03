import React from "react";
import Select from "react-select";
import classes from "./Select.module.css";

import makeAnimated from "react-select/animated";
const SelectDropDown1 = (props) => {

  const animatedComponents = makeAnimated();
  return (
    <div className={classes.inputs}>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
              border:"none",
              outline:"none",
            // borderColor: state.isActive ? 'grey' : 'red',
            // borderSize: '20px',
            fontSize: "14px",
            padding: "10px 10px",
            paddingLeft: "35px",
            width: "200px",
            color: "red",
            backgroundColor: "transparent",
          }),
          option: (styles, { data }) => ({
            ...styles,
            fontSize: "14px",
              border:"none",
              outline:"none"
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

export default SelectDropDown1;
