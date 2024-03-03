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
  const [experience, setExperience] = React.useState([])
  const [sloc, setSloc] = React.useState()
  const [sexp, setSexp] = React.useState()
  const [filterData, setFilterData] = React.useState()
  const [key, setKey] = React.useState()
  const locationHandler=(e)=>{
    setSloc(e.value)
  }
  const keywordHandler=(e)=>{

    setKey(e.target.value)
  }
  const experienceHandler=(e)=>{
    setSexp(e.value)
  }
  const search = () => {
    let filter=[]
    console.log(sloc, key, sexp)
    jobArray.forEach(i=>{
      let keywordMatch
      if(key){
      keywordMatch=Object.values(i).some(val=>{
        if(typeof val=="string" && val.toLowerCase().includes(key.toLowerCase())){
          return true;
        }
        return false;
      })
    }
    let locationMatch;
    if(sloc){
       locationMatch = i.location.toLowerCase() === sloc.toLowerCase();
    }
    let experienceMatch
    if(sexp){
       experienceMatch = i.experience.toLowerCase() === sexp.toLowerCase();
    }
      if(keywordMatch || locationMatch || experienceMatch){
        filter.push(          <JobBox
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
          />)
      }
    })
    setFilterData(filter)
    console.log(filter)
  };
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
      let exp=[]
      b.jobs.forEach((i) => {
        setLoading(true);
        temp.push(i);
        loc.push(i.location)
        exp.push(i.experience)
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
      let nloc= [...new Set(loc)].sort()
      let nexp = [...new Set(exp)].sort()
      let nnloc=[], nnexp=[]
      nloc.forEach(nl=>{
        nnloc.push({"label":nl, "value":nl})
      })
      nexp.forEach(nl=>{
        nnexp.push({"label":nl, "value":nl})
      })
      setLocation(nnloc)
      setExperience(nnexp)
      setJob(arr);
      setJobArray(temp);
      setLoading(false);
      // console.log(job)
    };
    jobs();
  }, []);
  console.log(location)
  console.log(experience)
  return (
    <>
      <Navbar />
      <main className={classes.main}>
    {/* <div className={classes.hero}>
      <div className={classes.bar}>
        <div className={classes.input}>
          <img src="./search.svg" alt="" />
          <input
          onChange={keywordHandler}
            type="text"
            name=""
            id=""
            placeholder="Search for Companies, Keyword "
          />
        </div>
        <div className={classes.input}>
          <img src="./location.png" alt="" />
          <SelectDropDown1 data={location} onChange={locationHandler} placeholder="Location"/>
        </div>
        <div className={classes.input}>
          <img src="./work.svg" alt="" />
          <SelectDropDown1 data={experience} onChange={experienceHandler} placeholder="Experience"/>
        </div>
        <Button1 onSubmit={search}>Search</Button1>
      </div>
    </div> */}
    <Hero jobArray={jobArray} setFilterData={setFilterData} location={location} experience={experience} />
        <section className={classes.manual}>
          {/* <div className={classes.specific}>
          <h1>See Company Specific Job Posting</h1>
        </div> */}
          <h1 className={classes.latest}>Latest Jobs</h1>
          <div className={classes.body}>{loading ? <Loader /> :filterData?.length>0?filterData :job}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
