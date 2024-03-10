'use client'
import React from "react";
import classes from "./page.module.css";
import Input from "@/components/Input/Input";
import Button1 from "@/components/Buttons/Button1";
import { ToastContainer, toast } from "react-toastify";
import {userLogin} from "@/lib/actions"
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const page = () => {
  const router=useRouter()
  const [tooast, setToast] = React.useState(false);
  const [email, setEmail]=React.useState()
  const [password, setPassword]=React.useState()
  const [active, setActive]=React.useState(false)
  React.useEffect(() => {
    const fun=async()=>{
      const res=await userLogin();
      console.log(res);
      if(res.loggedIn){
        router.push("/")
      }
      else{
        setActive(true)
      }
    }
    fun();
    setToast(false);
  }, []);

  const emailHandler=(e)=>{
    setEmail(e.target.value)
  }
  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }

  const formHandler = async () => {
    console.log("hjk");
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
    if (!password || password?.length < 7) {
      return toast.error("Password must be atleas 7 character long", {
        className: classes.toast,
      });
    }
    console.log("bc")
    const a = await fetch("/login/api", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const b = await a.json();

     if(b.error){
      toast.success("Wrong Credentials", {
        className: classes.toast,
      });
    } else {
      toast.success("Logged In Successfully", {
        className: classes.toast,
      });
      router.push("/")
    }
  };
  return (
    <>
    {active && <div className={classes.body}>
      <div className={classes.register}>
        <div className={classes.left}>
          <img src="/bg.png" alt="" />
        </div>
        <div className={classes.right}>            
        <div className={classes.head}>
              <h1>Register</h1>
              <Link href="/register">
                <h2>Create an Account</h2>
              </Link>
            </div>
          <div className={classes.inputs}>
              <Input
                label="Enter Email"
                onSubmit={emailHandler}
                type="email"
                placeholder="name@email.com"
              />
            <Input
              label="Enter Password"
              type="password"
              onSubmit={passwordHandler}
              placeholder="Alphanumeric and be 6 character long"
            />

            <Button1 onSubmit={formHandler}>Log In</Button1>
          </div>
        </div>
      </div>
    </div>
    }
    <ToastContainer/>
    </>
  );
};

export default page;
