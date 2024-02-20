'use client'
import React from "react";
import classes from "./style.module.css";
import SelectDropDown from "@/components/Buttons/Select/SelectDropDown";
import Input from "@/components/Inputs/Input";
import TextArea from "@/components/Input/TextArea";
import Toast from "@/components/Message/Toast";

const Dashboard = () => {
  const [toast, setToast] = React.useState(false);
  const [toastMsg, setToastMsg] = React.useState("");
  const [role, setRole] = React.useState();
  const [company, setCompany] = React.useState();
  const [experience, setExperience] = React.useState();
  const [salary, setSalary] = React.useState();
  const [location, setLocation] = React.useState();
  const [degree, setDegree] = React.useState();
  const [type, setType] = React.useState();
  const [link, setLink] = React.useState();
  const [description, setDescription] = React.useState();
  React.useEffect(() => {
    setToast(false);
  }, []);
  const roleHandler = (e) => {
    setToast(false);
    setRole(e.target.value);
  };
  const companyHandler = (e) => {
    setToast(false);
    setCompany(e.target.value);
  };
  const experienceHandler = (e) => {
    setToast(false);
    setExperience(e.value);
  };
  const salaryHandler = (e) => {
    setToast(false);
    setSalary(e.target.value);
  };
  const locationHandler = (e) => {
    setToast(false);
    setLocation(e.target.value);
  };
  const degreeHandler = (e) => {
    setToast(false);
    setDegree(e.value);
  };
  const typeHandler = (e) => {
    setToast(false);
    setType(e.value);
  };
  const linkHandler = (e) => {
    setToast(false);
    setLink(e.target.value);
  };
  const descriptionHandler = (e) => {
    setToast(false);
    setDescription(e.target.value);
  };


  const submitHandler = async (e) => {
    setToast(false);
    e.preventDefault();
    const res = await fetch("/admin/dashboard/api", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role: role,
        companyName: company,
        experience: experience,
        package: salary,
        location: location,
        degree: degree,
        type: type,
        description: description,
        link: link,
      }),
    });
    await res.json();
    setToast(true);
    setToastMsg("Job Successfully Posted");
  };
  return (
    <>
        <div className={classes.body}>
          <h1>Post Job</h1>
          <form className={classes.form} action="">
            <div className={classes.input}>
              <Input
                placeholder="Full Stack Web Developer"
                label="Enter Job Role"
                onSubmit={roleHandler}
              />
            </div>
            <div className={classes.input}>
              <Input
                placeholder="Amazon Pvt Ltd"
                label="Enter Company Name"
                onSubmit={companyHandler}
              />
            </div>
            <div className={classes.inputBox}>
              <div className={classes.input}>
                <SelectDropDown
                  label="Select Experience"
                  onChange={experienceHandler}
                  // placeholder="Select Project Category"
                  data={[
                    { label: "Fresher", value: "Fresher" },
                    { label: "Less than 1 yrs", value: "Less than 1 yrs" },
                    { label: "1-2 yrs", value: "1-2 yrs" },
                    { label: "Less than 5 yrs", value: "Less than 5 yrs" },
                  ]}
                />
              </div>
              <div className={classes.input}>
                <Input
                  placeholder="1,00,000 / month"
                  label="Enter Package"
                  onSubmit={salaryHandler}
                />
              </div>
              <div className={classes.input}>
                <Input
                  placeholder="Hoshiarpur"
                  label="Enter Location"
                  onSubmit={locationHandler}
                />
              </div>
            </div>
            <div className={classes.inputBox1}>
              <div className={classes.input}>
                <SelectDropDown
                  label="Select Degree"
                  onChange={degreeHandler}
                  // placeholder="Select Project Category"
                  data={[
                    { label: "B.Tech CSE", value: "B.Tech CSE" },
                    { label: "B.Tech IT", value: "B.Tech IT" },
                    { label: "B.Tech ECE", value: "B.Tech ECE" },
                    { label: "BCA/MCA", value: "BCA/MCA" },
                  ]}
                />
              </div>
              <div className={classes.input}>
                <SelectDropDown
                  label="Select Job Type"
                  onChange={typeHandler}
                  // placeholder="Select Project Category"
                  data={[
                    { label: "Internship", value: "Internship" },
                    { label: "Part Time", value: "Part Time" },
                    { label: "Full Time", value: "Full Time" },
                    { label: "Freelance", value: "Freelance" },
                  ]}
                />
              </div>
            </div>

            <div className={classes.input}>
              <Input
                placeholder="https://amazon.com/jobs/in/absdefg/apply"
                label="Enter Apply Link"
                onSubmit={linkHandler}
              />
            </div>
            <div className={classes.input}>
              <TextArea
                placeholder="lorem ipsum dolor sit"
                label="Enter Job Description"
                onSubmit={descriptionHandler}
              />
            </div>
            <button onClick={submitHandler} className={classes.btn}>
              Submit
            </button>
          </form>
        </div>
      {toast && <Toast type={false} msg={toastMsg} />}
    </>
  );
};

export default Dashboard;
