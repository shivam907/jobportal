import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import classes from "./page.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className={classes.body}>
        <div className={classes.box}>
          <div className={classes.img}>
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt=""
            />
          </div>
          <h1>Google</h1>
          <div className={classes.icon}>
            <ArrowForwardIcon className={classes.arrow}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
