'use client';
import classes from "./page.module.css";
import Button1 from "@/components/Buttons/Button1";
import data from "@/data/company.json";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from "next/link";

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
    const groupedData = keys.reduce((acc, curr) => {
      const firstChar = curr[0].toLowerCase();
      if (!acc[firstChar]) {
        acc[firstChar] = [curr];
      } else {
        acc[firstChar].push(curr);
      }
      return acc;
    }, {});
    console.log(groupedData);
    let arr = [];
    let curr=0;
    Object.keys(groupedData).forEach((i) => {
      let temp = [];
      groupedData[i].forEach((j) => {
        temp.push(
        <Link href={`/companies/${j.split(" ").join("")}`}>
          <div onClick={()=>setMenu(j.split(" ").join(""))} className={`${classes.assbox} ${j.split(" ").join("")==currUrl?classes.asactive:""}`}>
            <p>{j}</p>
            <KeyboardArrowRightIcon />
          </div>
        </Link>
        );
        curr+=1;
      });
      arr.push(
        <div className={classes.asbox}>
          <div className={classes.ashead}>
            <h1>{i}</h1>
          </div>
          <div className={classes.asbody}>{temp}</div>
        </div>
      );
    });
    setSideBar(arr);
  }, [menu, pathname]);
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <div className={classes.hero}>
          <div className={classes.bar}>
            <div className={classes.input}>
              <img src="./search.svg" alt="" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for Companies, Keyword "
              />
            </div>
            <div className={classes.input}>
              <img src="./location.png" alt="" />
              <input type="text" name="" id="" placeholder="Location" />
            </div>
            <div className={classes.input}>
              <img src="./work.svg" alt="" />
              <input type="text" name="" id="" placeholder="Experience" />
            </div>
            <Button1>Search</Button1>
          </div>
          {/* <div className={classes.text}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Freshers Only</label>
        </div> */}
        </div>
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