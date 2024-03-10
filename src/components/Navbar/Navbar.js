import React from "react";
import classes from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { userLogin } from "@/lib/actions";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Navbar = () => {
  const [scroll, changeScroll] = React.useState(false);
  const [open, changeOpen] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [logout, setLogout] = React.useState(false);
  const [name, setName] = React.useState();
  function change() {
    changeOpen(open ? false : true);
  }
  const logoutclick = () => {
    setLogout(logout ? false : true);
  };
  const logoutfun = async () => {
    setLogout(false);
    setLogin(false);
    await fetch("/api/logout");
  };
  const nav = React.useRef(null);
  React.useEffect(() => {
    const resizeHeaderOnScroll = () => {
      const distanceY =
          window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 30;
      changeScroll(distanceY > shrinkOn ? true : false);
    };
    window.addEventListener("scroll", resizeHeaderOnScroll);
    const fun = async () => {
      const res = await userLogin();
      console.log(res);
      if (res.loggedIn) {
        setName(res.loggedIn.name);
        setLogin(true);
      } else {
        setLogin(false);
      }
    };
    fun();
  }, []);
  return (
    <>
      <div
        ref={nav}
        className={`${classes.nav} ${scroll ? classes.scroll : ""} ${
          open ? classes.zi : ""
        }`}
      >
        <nav>
          <Link href="/">
            <img className={classes.logo} src="/toid.png" alt="" />
          </Link>
          <div className={classes.navelements}>
            <div className={classes.nav1}>
              {/* <div className={classes.navel}>About</div> */}
              <Link href="/companies">
                <div className={classes.navel}>Companies</div>
              </Link>
              <Link href="https://cgcassignments.com">
                <div className={classes.navel}>Notes</div>
              </Link>
              <Link href="/carrers">
                <div className={classes.navel}>Carrers</div>
              </Link>
            </div>
            {login ? (
              <div onClick={logoutclick} className={classes.logg}>
                <p>{name}</p>
                <ArrowDropDownIcon className={classes.logIcon} />
              </div>
            ) : (
              <Link href="/register">
                <div className={classes.nav2}>
                  <a className={classes.reg}>Register</a>
                </div>
              </Link>
            )}
          </div>
          <div className={classes.nav3}>
            {open ? (
              <CloseIcon onClick={change} className={classes.menu} />
            ) : (
              <MenuIcon onClick={change} className={classes.menu} />
            )}
          </div>
          {logout && (
            <div className={classes.logout}>
              <div className={classes.logbox}>
                <div onClick={logoutfun} className={classes.lbox}>
                  <p>Logout</p>
                  <LogoutIcon />
                </div>
              </div>
            </div>
          )}
        </nav>
        {open && (
          <div className={classes.mobile}>
            <div className={classes.mob}>
              <div className={classes.nav1}>
                <Link href="/companies">
                  <div className={classes.navel}>Companies</div>
                </Link>
                <Link href="https://cgcassignments.com">
                  <div className={classes.navel}>Notes</div>
                </Link>
                <Link href="/carrers">
                  <div className={classes.navel}>Carrers</div>
                </Link>
              </div>
              {login ? (
                <div onClick={logoutclick} className={classes.logg}>
                  <p>{name}</p>
                  <ArrowDropDownIcon />
                </div>
              ) : (
                <Link href="/register">
                  <div className={classes.nav2}>
                    <a className={classes.reg}>Register</a>
                  </div>
                </Link>
              )}
              {logout && (
                <div onClick={logoutfun} className={classes.lbox}>
                  <p>Logout</p>
                  <LogoutIcon />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
