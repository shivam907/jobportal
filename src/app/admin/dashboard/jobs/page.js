'use client'
import React from "react";
import classes from "./style.module.css";
import Toast from "@/components/Message/Toast";
import JobBox from "@/components/Job/JobBox";

const Dashboard = () => {
  const [toast, setToast] = React.useState(false);
  const [toastMsg, setToastMsg] = React.useState("");

  const [job, setJob] = React.useState();
  React.useEffect(() => {
    setToast(false);
    const jobs = async () => {
      // const a = await fetch("http://localhost:4000/api/jobs");
      // const b = await a.json();

      const b=[1,2,3,4,5,6,7];
      let arr = [];
      b.forEach((i) => {
        arr.push(
          <JobBox
            key={Math.random(1) * 1000}
            edit={true}
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

        <div className={classes.jobc}>
          <h1 className={classes.jh}>All Jobs</h1>
          <div className={classes.jobs}>{job}</div>
        </div>
      {toast && <Toast type={false} msg={toastMsg} />}
    </>
  );
};

export default Dashboard;
