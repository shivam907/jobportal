'use client'
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ChatIcon from "@mui/icons-material/Chat";
import classes from "./stylee.module.css";
import Link from "next/link";
import img from "./logo.png";
const layout = ({children}) => {
  const [menu, setMenu] = React.useState(0)
  const menuHandler = (e)=>{
    setMenu(e)
    // props.current(e)
  }
  const logout = async () => {
    await fetch("http://localhost:4000/api/logout", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    window.location.href = "/";
  };
  return (
    <div className={classes.nav}>
      <nav className={classes.navBar}>
        <div className={classes.navIn}>
          <a href="/s" className={classes.logo}>
            <img className={classes.logo} src={img} alt="" />
          </a>
          <div className={classes.menuBox}>
            <div className={classes.menuIn}>
              <Link href="/dashboard">
              <div onClick={()=>menuHandler(0)} className={`${classes.menuFlex} ${menu===0?classes.activ:''}`}>
                <DashboardIcon className={classes.iconSize} />
                <p className={classes.paraNav}>Dashboard</p>
              </div>
              </Link>

              <Link href="/dashboard/jobs">
              <div onClick={()=>menuHandler(1)} className={`${classes.menuFlex} ${menu===1?classes.activ:''}`}>
                <CardMembershipIcon className={classes.iconSize} />
                <p className={classes.paraNav}>All Jobs</p>
              </div>
              </Link>
              <div onClick={()=>menuHandler(2)} className={`${classes.menuFlex} ${menu===2?classes.activ:''}`}>
                <ChatIcon className={classes.iconSize} />
                <p className={classes.paraNav}>Messages</p>
              </div>
            </div>
          </div>
        </div>

        <div onClick={logout} className={classes.profileBox}>
          <div onClick={logout} className={classes.profileIn}>
            <div className={classes.flexIn}>
              <div className={classes.nameBox}>
                <p className={classes.paraName}>Log Out</p>
              </div>
            </div>
            <PowerSettingsNewIcon className={classes.iconSize} />
          </div>
        </div>
      </nav>
      <div className={classes.body}>{children}</div>
    </div>
  );
};

export default layout;
