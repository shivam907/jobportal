"use client";
import classes from "./page.module.css";
import Loader from "@/components/Loader/Loader";
import JobBox from "@/components/Job/JobBox";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import axios from 'axios';

export default function Home() {
  const [job, setJob] = React.useState();
  const [jobArray, setJobArray] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [location, setLocation] = React.useState([]);
  const [experience, setExperience] = React.useState([]);
  const [filterData, setFilterData] = React.useState();

  React.useEffect(() => {
    const jobs = async () => {
      try {
        const aa = await axios.get("/api");
        const bb = aa.data;
        const a = await axios.post("/admin/dashboard/jobs/api",{ login: true }, { headers: { 'Cache-Control': 'no-store' } });
        const b = a.data;
        let arr = [];
        let temp = [];
        let loc = [];
        let exp = [];
        b.jobs.forEach((i) => {
          setLoading(true);
          temp.push({
            key: Math.random(1) * 1000,
            id: i._id,
            date: i.createdAt,
            jobName: i.role,
            companyName: i.companyName,
            experience: i.experience,
            salary: i.package,
            degree: i.degree,
            location: i.location,
            role: i.type,
            description: i.description?.slice(0, 100),
            link: i.link,
          });
          loc.push(i.location);
          exp.push(i.experience);
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
        let nloc = [...new Set(loc)].sort();
        let nexp = [...new Set(exp)].sort();
        let nnloc = [],
          nnexp = [];
        nloc.forEach((nl) => {
          nnloc.push({ label: nl, value: nl });
        });
        nexp.forEach((nl) => {
          nnexp.push({ label: nl, value: nl });
        });
        setLocation(nnloc);
        setExperience(nnexp);
        setJob(arr);
        setJobArray(temp);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    jobs();
  }, []);

  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <Hero
          jobArray={jobArray}
          setFilterData={setFilterData}
          location={location}
          experience={experience}
        />
        <section className={classes.manual}>
          <div className={classes.newBoxes}>
            <div className={classes.box1}>
              <h1>View Latest Job Openings of 88+ Companies</h1>
              <Link href="/companies">
                <div className={classes.btn3}>View Now</div>
              </Link>
            </div>
            <div className={classes.box2}>
              <h1>View Career Pages of 50+ Companies</h1>
              <Link href="/carrers">
                <div className={classes.btn3}>View Now</div>
              </Link>
            </div>
          </div>
          <h1 className={classes.latest}>Latest Jobs</h1>
          <div className={classes.body}>
            {loading ? <Loader /> : filterData?.length > 0 ? filterData : job}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
