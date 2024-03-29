'use client'
import React from "react";
import classes from "./style.module.css";
import Toast from "@/components/Message/Toast";
import JobBox from "@/components/Job/JobBox";
import axios from "axios"
const Dashboard = () => {
  const [toast, setToast] = React.useState(false);
  const [toastMsg, setToastMsg] = React.useState("");
  const [render, setRender] = React.useState(false)
  const [job, setJob] = React.useState();
  const handleRender = ()=>{
    setRender(render?false:true)
  }
  React.useEffect(() => {
    setToast(false);
    const jobs = async () => {
        const a = await axios.post("/admin/dashboard/jobs/api",{ login: true }, { headers: { 'Cache-Control': 'no-store' } });
        const b = a.data;
      let arr = [];
      b.jobs.forEach((i) => {
        arr.push(
          <JobBox
            render={handleRender}
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
  },[render])
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
