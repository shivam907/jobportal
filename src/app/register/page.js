'use client'
import React from "react";
import classes from "./page.module.css";
import Input from "@/components/Input/Input";
import Button1 from "@/components/Buttons/Button1";
const page = () => {
  const [name, setName]=React.useState()
  const [email, setEmail]=React.useState()
  const [otp, setOtp]=React.useState()
  const [realOtp, setRealOtp] = React.useState();
  const [otpD, setOtpD] = React.useState(true)
  const [btnD, setBtnD] = React.useState(false)
  const [emailD, setEmailD] = React.useState(false)
  const [college, setCollege]=React.useState()
  const [password, setPassword]=React.useState()
  const [cpassword, setCPassword]=React.useState()

  const sendOtp = async () => {
    console.log("ys");
    if (email.includes("@") && email.includes(".")) {
      const a = await fetch("/register/api/otp", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      });
      const b = await a.json();
      setRealOtp(b.otp);
      setOtpD(false);
      setBtnD(true);
      setEmailD(true);
    }
  };
  const nameHandler=(e)=>{
    setName(e.target.value)
  }
  const emailHandler=(e)=>{
    setEmail(e.target.value)
  }
  const otpHandler=(e)=>{
    setOtp(e.target.value)
  }
  const collegeHandler=(e)=>{
    setCollege(e.target.value)
  }
  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }
  const cpasswordHandler=(e)=>{
    setCPassword(e.target.value)
  }
  const formHandler=()=>{}
  return (
    <div className={classes.body}>
      <div className={classes.register}>
        <div className={classes.left}></div>
        <div className={classes.right}>
          <h1>Register</h1>
          <div className={classes.inputs}>
            <Input
              label="Enter Name"
              type="text"
              onSubmit={nameHandler}
              placeholder="John Doe"
            />

            <div className={classes.otp}>
              <Input
                label="Enter Email"
                onSubmit={emailHandler}
                type="email"
                disabled={emailD}
                placeholder="name@email.com"
              />
              <button
                onClick={sendOtp}
                disabled={btnD}
                className={classes.otpbtn}
              >
                Send Otp
              </button>
            </div>

            <Input
              label="Enter OTP"
              type="number"
              onSubmit={otpHandler}
              disabled={otpD}
              placeholder="Enter 6 digit long Otp"
            />

            <Input
              label="Enter College Name"
              type="text"
              onSubmit={collegeHandler}
              placeholder="Chandigarh Engineering College"
            />
            <Input
              label="Enter Password"
              type="text"
              onSubmit={passwordHandler}
              placeholder="Alphanumeric and be 6 character long"
            />
            <Input
              label="Confirm Password"
              type="password"
              onSubmit={cpasswordHandler}
              placeholder="Alphanumeric and be 6 character long"
            />
            <Button1 onSubmit={formHandler}>Submit</Button1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
