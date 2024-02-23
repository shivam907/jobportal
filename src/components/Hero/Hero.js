import React from 'react'
import Button1 from "@/components/Buttons/Button1";
import classes from "./style.module.css"
const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.bar}>
        <div className={classes.input}>
          <img src="./search.svg" alt="" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for Companies, Keyword "
          />
        </div>
        <div className={classes.input}>
          <img src="./location.png" alt="" />
          <input type="text" name="" id="" placeholder="Location" />
        </div>
        <div className={classes.input}>
          <img src="./work.svg" alt="" />
          <input type="text" name="" id="" placeholder="Experience" />
        </div>
        <Button1>Search</Button1>
      </div>
      {/* <div className={classes.text}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Freshers Only</label>
        </div> */}
    </div>
  );
}

export default Hero