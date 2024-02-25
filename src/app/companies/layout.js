'use client';
import classes from "./page.module.css";
import Button1 from "@/components/Buttons/Button1";
import data from "@/data/company.json";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from "next/link";
import Hero from "@/components/Hero/Hero";

import { usePathname } from 'next/navigation'
import React from "react";
const layout = ({children}) => {
  // console.log(Object.keys(data.data))
  const [sideBar, setSideBar] = React.useState();
  const [menu, setMenu] = React.useState(0);
  const pathname = usePathname()
  React.useEffect(() => {
    const currUrl = pathname.slice(11, pathname.length)
    const keys = Object.keys(data.data).sort();
    console.log(keys.length)
    const groupedData = keys.reduce((acc, curr) => {
      const firstChar = curr[0].toLowerCase();
      if (!acc[firstChar]) {
        acc[firstChar] = [curr];
      } else {
        acc[firstChar].push(curr);
      }
      return acc;
    }, {});
    console.log(Object.keys(groupedData).length);
    let arr = [];
    let curr=0;
    Object.keys(groupedData).forEach((i) => {
      let temp = [];
      groupedData[i].forEach((j) => {
        temp.push(
        <Link key={Math.random()} href={`/companies/${j.split(" ").join("")}`}>
          <div key={Math.random()} onClick={()=>setMenu(j.split(" ").join(""))} className={`${classes.assbox} ${j.split(" ").join("")==currUrl?classes.asactive:""}`}>
            <p>{j}</p>
            <KeyboardArrowRightIcon />
          </div>
        </Link>
        );
        curr+=1;
      });
      arr.push(
        <div key={Math.random()} className={classes.asbox}>
          <div className={classes.ashead}>
            <h1>{i}</h1>
          </div>
          <div key={Math.random()} className={classes.asbody}>{temp}</div>
        </div>
      );
    });
    setSideBar(arr);
  }, [menu, pathname]);
  return (
    <>
      <Navbar />
      <main className={classes.main}>
      <Hero/>
        <section className={classes.manual}>
          {/* <h1 className={classes.latest}>Latest Jobs</h1> */}
          <div className={classes.jobbody}>
            <aside className={classes.aside}>{sideBar}</aside>
            <div className={classes.body}>
            <div className={classes.container}>

            {children}
            </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default layout;