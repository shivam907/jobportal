import React from "react";
import classes from "./Loader.module.css"
const Loading = () => {
  return (
    <div className={classes["spinner-container1"]}>
      <div className={classes["loading-spinner1"]}></div>
    </div>
  );
};

export default Loading;
