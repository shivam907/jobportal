'use client'
import React from "react";
import classes from "./page.module.css";
import Input from "@/components/Input/Input";
import Button1 from "@/components/Buttons/Button1";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const page = () => {
  const [tooast, setToast] = React.useState(false);
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
  React.useEffect(() => {
    setToast(false);
  }, []);
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
      if (b.exist) {
        console.log("yes")
        return toast.error("Email Already Exist", {
          className: classes.toast,
        });
      }
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
  const formHandler = async () => {
    console.log("hjk");
    if (!name || name?.length < 2) {
      return toast.error("Please enter your name", {
        className: classes.toast,
      });
    }
    if (
      !email ||
      email?.length < 4 ||
      !email?.includes("@") ||
      !email?.includes(".")
    ) {
      return toast.error("Please enter your email", {
        className: classes.toast,
      });
    }
    if (!otp || otp != realOtp) {
      return toast.error("Please enter correct Otp", {
        className: classes.toast,
      });
    }
    if (!college || college?.length < 2) {
      return toast.error("Please enter college name", {
        className: classes.toast,
      });
    }
    if (!password || password?.length < 7) {
      return toast.error("Password must be atleas 7 character long", {
        className: classes.toast,
      });
    }
    if (!cpassword || password != cpassword) {
      return toast.error("Confirm Password Does't match", {
        className: classes.toast,
      });
    }
    console.log("bc")
    const a = await fetch("/register/api", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        password,
        college,
      }),
    });
    const b = await a.json();
    if (b.exist) {
      toast.error("Email Already Exist", {
        className: classes.toast,
      });
    } else {
      toast.success("Registered Successfully", {
        className: classes.toast,
      });
    }
  };
  return (
    <>
      <div className={classes.body}>
        <div className={classes.register}>
          <div className={classes.left}>
            <img src="/bg.png" alt="" />
          </div>
          <div className={classes.right}>
            <div className={classes.head}>
              <h1>Register</h1>
              <Link href="/login">
                <h2>Already Have an Account ? Login</h2>
              </Link>
            </div>
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
      <ToastContainer />
    </>
  );
};

export default page;
