'use client';
import classes from "./page.module.css";
import Button1 from "@/components/Buttons/Button1";
import JobBox from "@/components/Job/JobBox";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import React from "react";
import Hero from "@/components/Hero/Hero";
export default function Home() {
    const [job, setJob] = React.useState();
  React.useEffect(() => {
    const jobs = async () => {
      const aa = await fetch("/api");
      const bb = await aa.json();
      console.log(bb)
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
            link={i.link}
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
    <Hero/>
      <section className={classes.manual}>
        {/* <div className={classes.specific}>
          <h1>See Company Specific Job Posting</h1>
        </div> */}
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
