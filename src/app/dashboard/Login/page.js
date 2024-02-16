import React from 'react'
import logo from "./logo.png"
import classes from "./style.module.css";
const Login = () => {
  const [userName, setUserName] = React.useState()
  const [password, setPassword] = React.useState()
  const usernameHandler = (e)=>{
    setUserName(e.target.value)
  }
  const passwordHandler = (e)=>{
    setPassword(e.target.value)
  }
  const submitHandler = async ()=>{

    const a = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: userName,
        pass: password,
      })
    });
    const b = await a.json();
    if(b.loggedIn){
      window.location.href = "/dashboard"
    }
  }
    // React.useEffect(() => {
    //   const f = async () => {
    //     const a = await fetch("http://localhost:4000/api/isLogin");
    //     const b = await a.json();
    //     if (!b.loggedIn) {
    //       window.location.href = "/";
    //     }
    //   };
    //   f();
    // }, []);
  return (
    <div className={classes.body}>
      <img src={logo} alt="" className={classes.logo} />
      <div className={classes.box}>
        <h1>Login</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.input}>
            <label htmlFor="">Enter Username</label>
            <input onChange={usernameHandler} type="text" placeholder="Username" />
          </div>
          <div className={classes.input}>
            <label htmlFor="">Enter Password</label>
            <input onChange={passwordHandler} type="text" placeholder="Password" />
          </div>
        </form>
        <button onClick={submitHandler} className={classes.btn}>Submit</button>
      </div>
    </div>
  );
}

export default Login