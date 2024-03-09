"use client";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ChatIcon from "@mui/icons-material/Chat";
import classes from "./stylee.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/lib/actions";
import { scrap } from "@/lib/scraper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@/components/Loader/Loading";
import img from "./logo.png";
// import { cookies } from "next/headers";
const layout = ({ children }) => {
  const router = useRouter();
  const [display, setDisplay] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [scraping, setScraping] = React.useState(false)
  const openMenu = () => {
    setOpen(open ? false : true);
  };
  const scrapClick =async () => {
    if(!window.location.href.includes("localhost")){
        return toast.error("You are Not on Localhost",{
      className: classes.toast
    });
  }
  setScraping(true)
  await scrap()
  setScraping(false)
  };
  React.useEffect(() => {
    console.log(window.location.href)
    const fun = async () => {
      const data = await adminLogin();
      console.log("adl", data);
      if (!data.loggedIn) {
        router.push("/admin/login");
      } else {
        setDisplay(true);
      }
    };
    fun();
  }, []);
  const [menu, setMenu] = React.useState(0);
  const menuHandler = (e) => {
    setMenu(e);
    // props.current(e)
  };
  const logout = async () => {
    const a = await fetch("/admin/dashboard/api/logout");
    const b = await a.json();
    console.log(b);
    router.push("/admin/login");
    // const encryptedSessionData = { loggedIn: true };
    // cookies().set("session", JSON.stringify(encryptedSessionData), {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   maxAge: 60 * 60 * 24 * 7, // One week
    //   path: "/",
    // });
    //ss
  };
  return (
    <>
      {display && (
        <div className={classes.nav}>
          <nav className={classes.navBar}>
            <div className={classes.navIn}>
              <a href="/s" className={classes.logo}>
                <img className={classes.logo} src={img} alt="" />
              </a>
              <div className={classes.menuBox}>
                <div className={classes.menuIn}>
                  <Link href="/admin/dashboard">
                    <div
                      onClick={() => menuHandler(0)}
                      className={`${classes.menuFlex} ${
                        menu === 0 ? classes.activ : ""
                      }`}
                    >
                      <DashboardIcon className={classes.iconSize} />
                      <p className={classes.paraNav}>Dashboard</p>
                    </div>
                  </Link>
                  <Link href="/admin/dashboard/jobs">
                    <div
                      onClick={() => menuHandler(1)}
                      className={`${classes.menuFlex} ${
                        menu === 1 ? classes.activ : ""
                      }`}
                    >
                      <CardMembershipIcon className={classes.iconSize} />
                      <p className={classes.paraNav}>All Jobs</p>
                    </div>
                  </Link>
                  <div
                    onClick={() => menuHandler(2)}
                    className={`${classes.menuFlex} ${
                      menu === 2 ? classes.activ : ""
                    }`}
                  >
                    <ChatIcon className={classes.iconSize} />
                    <p className={classes.paraNav}>Messages</p>
                  </div>
                  <div onClick={scrapClick} className={`${classes.menuFlex}`}>
                    {scraping?<Loading/>:<PlayArrowIcon className={classes.iconSize} />}
                    <p className={classes.paraNav}>Scrap</p>
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
          <div className={classes.body}>
            <div className={classes.mob}>
              <MenuIcon onClick={openMenu} className={classes.icon} />
            </div>
            {open && (
              <div className={classes.menuOpen}>
                <div className={classes.close}>
                  <CloseIcon onClick={openMenu} className={classes.clos} />
                </div>
                <div className={classes.menuBox}>
                  <div className={classes.menuIn}>
                    <Link href="/admin/dashboard">
                      <div
                        onClick={() => {
                          menuHandler(0);
                          setOpen(false);
                        }}
                        className={`${classes.menuFlex} ${
                          menu === 0 ? classes.activ : ""
                        }`}
                      >
                        <DashboardIcon className={classes.iconSize} />
                        <p className={classes.paraNav}>Dashboard</p>
                      </div>
                    </Link>
                    <Link href="/admin/dashboard/jobs">
                      <div
                        onClick={() => {
                          menuHandler(1);
                          setOpen(false);
                        }}
                        className={`${classes.menuFlex} ${
                          menu === 1 ? classes.activ : ""
                        }`}
                      >
                        <CardMembershipIcon className={classes.iconSize} />
                        <p className={classes.paraNav}>All Jobs</p>
                      </div>
                    </Link>
                    <div
                      onClick={() => {
                        menuHandler(2);
                        setOpen(false);
                      }}
                      className={`${classes.menuFlex} ${
                        menu === 2 ? classes.activ : ""
                      }`}
                    >
                      <ChatIcon className={classes.iconSize} />
                      <p className={classes.paraNav}>Messages</p>
                    </div>
                    <div
                      onClick={() => {
                        menuHandler(2);
                        setOpen(false);
                      }}
                      className={`${classes.menuFlex} ${
                        menu === 2 ? classes.activ : ""
                      }`}
                    >
                      <PlayArrowIcon className={classes.iconSize} />
                      <p className={classes.paraNav}>Scrap</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {children}
          </div>
        </div>
      )}

      <ToastContainer/>
    </>
  );
};

export default layout;
