'use client';
import JobBox from "@/components/Job/JobBox";
import React from "react";
import Lay from "./Lay";
import Loader from "@/components/Loader/Loader";
export default function Home() {
  const [job, setJob] = React.useState();
  const [jobArray, setJobArray] = React.useState();
  const [location, setLocation] = React.useState([])
  const [experience, setExperience] = React.useState([])
  const [filterData, setFilterData] = React.useState()
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const jobs = async () => {
      const a = await fetch("/admin/dashboard/jobs/api");
      const b = await a.json();
      let arr = [];      
      let temp = [];
      let loc=[]
      let exp=[]
      b.jobs.forEach((i) => {
        setLoading(true)
        console.log(i)
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
    };
    jobs();
  },[])
  return (
    <Lay jobArray={jobArray} setFilterData={setFilterData} location={location} experience={experience} >
     {loading ? <Loader /> :filterData?.length>0?filterData :job}
    </Lay>
  );
}
