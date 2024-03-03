import React from "react";
import classes from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [scroll, changeScroll] = React.useState(false);
  const [open, changeOpen] = React.useState(false);
  function change() {
    changeOpen(open ? false : true);
  }
  const nav = React.useRef(null);
  React.useEffect(()=>{
    const resizeHeaderOnScroll = () => {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 30;
      changeScroll(distanceY > shrinkOn ? true : false);
    };
    window.addEventListener("scroll", resizeHeaderOnScroll);
  },[])
  return (
    <div ref={nav} className={`${classes.nav} ${scroll?classes.scroll:''}`}>
      <nav>
        <h1>LOGO</h1>
        <div className={classes.navelements}>
          <div className={classes.nav1}>
            <div className={classes.navel}>About</div>
            <div className={classes.navel}>Companies</div>
            <div className={classes.navel}>Jobs</div>
            <div className={classes.navel}>Carrers</div>
            <div className={classes.navel}>Carrers</div>
          </div>
          <div className={classes.nav2}>
          {/* <Button2>Login</Button2> */}
          <a>Register</a>
          </div>
        </div>
        <div className={classes.nav3}>
          <MenuIcon className={classes.menu}/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
