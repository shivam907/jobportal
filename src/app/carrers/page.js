"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import classes from "./page.module.css";
import Link from "next/link";
import data from "@/data/carrer.json";
const page = () => {
  const [company, setCompany] = React.useState();
  React.useEffect(() => {
    let arr = [];
    data.forEach((i) => {
      arr.push(
        <Link href={i.link}>
          <div className={classes.box}>
            <div className={classes.img}>
              <img src={i.img} alt="" />
            </div>
            <div className={classes.name}>
              <h1>{i.name}</h1>

              <div className={classes.arrow}></div>
            </div>
          </div>
        </Link>
      );
    });

    setCompany(arr);
    console.log(data.length);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <div className={classes.body}>{company}</div>
      <Footer />
    </>
  );
};

export default page;
  