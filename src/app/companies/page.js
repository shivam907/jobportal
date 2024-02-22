'use client';
import JobBox from "@/components/Job/JobBox";
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
     {job}
    </>
  );
}
