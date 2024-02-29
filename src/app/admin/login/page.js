"use client";
import React from "react";
import logo from "./logo.png";
import classes from "./style.module.css";
import { useRouter } from 'next/navigation'
import {adminLogin} from "@/lib/actions"
const Login = () => {
  const router=useRouter()
  const [display, setDisplay]=React.useState(false)
  React.useEffect(()=>{
    const fun=async ()=>{
    const data= await adminLogin()
    console.log("adl",data)
    if(data.loggedIn){
      router.push("/admin/dashboard")
    }
    else{
      setDisplay(true)
    }
  }
    fun()
  },[])
  // console.log(adminLogin())
  const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const usernameHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = async () => {
    const a = await fetch("/admin/login/api", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: userName,
        pass: password,
      }),
    });
    const b = await a.json();
    if (b.loggedIn) {
      router.push("/admin/dashboard")
    }
    else{
      router.push("/")
    }
  };

  return (<>
  {display &&
    <div className={classes.body}>
      <img src={logo} alt="" className={classes.logo} />
      <div className={classes.box}>
        <h1>Login</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.input}>
            <label htmlFor="">Enter Username</label>
            <input
              onChange={usernameHandler}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="">Enter Password</label>
            <input
              onChange={passwordHandler}
              type="text"
              placeholder="Password"
            />
          </div>
        </form>
        <button onClick={submitHandler} className={classes.btn}>
          Submit
        </button>
      </div>
    </div>
  }
    </>
  );
};

export default Login;
