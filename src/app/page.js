'use client';
import classes from "./page.module.css";
import Loader from "@/components/Loader/Loader";
import JobBox from "@/components/Job/JobBox";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import React from "react";
import Hero from "@/components/Hero/Hero";
import SelectDropDown1 from "@/components/Select/SelectDropDown1";
import Button1 from "@/components/Buttons/Button1";
export default function Home() {
  const [job, setJob] = React.useState();
  const [jobArray, setJobArray] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [location, setLocation] = React.useState([])
  const search = () => {};
  React.useEffect(() => {
    const jobs = async () => {
      const aa = await fetch("/api");
      const bb = await aa.json();
      console.log(bb);
      const a = await fetch("/admin/dashboard/jobs/api");
      const b = await a.json();
      let arr = [];
      let temp = [];
      let loc=[]
      b.jobs.forEach((i) => {
        setLoading(true);
        temp.push(i);
        loc.push(i.location)
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
      setLocation(loc)
      setJob(arr);
      setJobArray(temp);
      setLoading(false);
      // console.log(job)
    };
    jobs();
  }, []);
  console.log(location)
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
          <SelectDropDown1 placeholder="Location"/>
          {/* <input type="text" name="" id="" placeholder="Location" /> */}
        </div>
        <div className={classes.input}>
          <img src="./work.svg" alt="" />
          <SelectDropDown1 placeholder="Experience"/>
        </div>
        <Button1>Search</Button1>
      </div>
      {/* <div className={classes.text}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Freshers Only</label>
        </div> */}
    </div>
        <section className={classes.manual}>
          {/* <div className={classes.specific}>
          <h1>See Company Specific Job Posting</h1>
        </div> */}
          <h1 className={classes.latest}>Latest Jobs</h1>
          <div className={classes.body}>{loading ? <Loader /> : job}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
