import React from "react";
import classes from "./page.module.css";
import Input from "@/components/Input/Input";
import Button1 from "@/components/Buttons/Button1";
const page = () => {
  return (
    <div className={classes.body}>
      <div className={classes.register}>
        <div className={classes.left}></div>
        <div className={classes.right}>
          <h1>Register</h1>
          <div className={classes.inputs}>
            <Input label="Enter Name" type="text" placeholder="John Doe" />
            <Input
              label="Enter Email"
              type="email"
              placeholder="name@email.com"
            />
            <Input
              label="Enter OTP"
              type="number"
              placeholder="* * * * * *"
            />
            <Input
              label="Enter College Name"
              type="text"
              placeholder="Chandigarh Engineering College"
            />
            <Input
              label="Enter Password"
              type="text"
              placeholder="Alphanumeric and be 6 character long"
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Alphanumeric and be 6 character long"
            />
            <Button1>Submit</Button1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
