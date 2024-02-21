'use client';
import classes from "./page.module.css";
import Button1 from "@/components/Buttons/Button1";
import JobBox from "@/components/Job/JobBox";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import React from "react";
export default function Home() {
    const [job, setJob] = React.useState();
  React.useEffect(() => {
    const jobs = async () => {
      const a = await fetch("/admin/dashboard/jobs/api");
      const b = await a.json();
      let arr = [];
      b.jobs.forEach((i) => {
        arr.push(
          <JobBox
            key={Math.random(1) * 1000}
            id={i._id}
            date={i.createdAt}
            jobName={i.role}
            companyName={i.companyName}
            experience={i.experience}
            salary={i.package}
            degree={i.degree}
            location={i.location}
            role={i.type}
            description={i.description?.slice(0, 100)}
            link={"https://h.co"}
          />
        );
      });
      setJob(arr);
    };
    jobs();
  },[])
  return (
    <>
    <Navbar/>
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

      <h1 className={classes.latest}>
        Latest Jobs
      </h1>
      <div className={classes.body}>
      {job}
      </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
