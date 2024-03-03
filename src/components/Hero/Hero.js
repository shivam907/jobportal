import React from 'react'
import Button1 from "@/components/Buttons/Button1";
import classes from "./style.module.css"
import SelectDropDown1 from "@/components/Select/SelectDropDown1";
import JobBox from "@/components/Job/JobBox";
const Hero = (props) => {
  const [sloc, setSloc] = React.useState();
  const [sexp, setSexp] = React.useState();
  const [key, setKey] = React.useState();
  const locationHandler = (e) => {
    setSloc(e.value);
  };
  const keywordHandler = (e) => {
    setKey(e.target.value);
  };
  const experienceHandler = (e) => {
    setSexp(e.value);
  };
  const search = () => {
    let filter = [];
    console.log(sloc, key, sexp);
    props.jobArray.forEach((i) => {
      let keywordMatch;
      if (key) {
        keywordMatch = Object.values(i).some((val) => {
          if (
            typeof val == "string" &&
            val.toLowerCase().includes(key.toLowerCase())
          ) {
            return true;
          }
          return false;
        });
      }
      let locationMatch;
      if (sloc) {
        locationMatch = i.location.toLowerCase() === sloc.toLowerCase();
      }
      let experienceMatch;
      if (sexp) {
        experienceMatch = i.experience.toLowerCase() === sexp.toLowerCase();
      }
      if (keywordMatch || locationMatch || experienceMatch) {
        filter.push(
          <JobBox
            key={Math.random(1) * 1000}
            scraped={i.scraped}
            id={i._id}
            date={i.date}
            jobName={i.jobName}
            companyName={i.companyName}
            experience={i.experience}
            salary={i.salary}
            degree={i.degree}
            location={i.location}
            role={i.role}
            description={i.description?.slice(0, 100)}
            link={i.link}
          />
        );
      }
    });
    props.setFilterData(filter);
    console.log(filter);
  };
  return (
    <div className={classes.hero}>
      <div className={classes.bar}>
        <div className={classes.input}>
          <img src="/search.svg" alt="" />
          <input
            onChange={keywordHandler}
            type="text"
            name=""
            id=""
            placeholder="Search for Companies, Keyword "
          />
        </div>
        <div className={classes.input1}>
          <img src="/location.png" alt="" />
          <SelectDropDown1
            data={props.location}
            onChange={locationHandler}
            placeholder="Location"
          />
          {/* <input type="text" name="" id="" placeholder="Location" /> */}
        </div>
        <div className={classes.input1}>
          <img src="/work.svg" alt="" />
          <SelectDropDown1
            data={props.experience}
            onChange={experienceHandler}
            placeholder="Experience"
          />
        </div>
        <button onClick={search} className={classes.btn1}>Search</button>
      </div>
      {/* <div className={classes.text}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Freshers Only</label>
        </div> */}
    </div>
  );
}

export default Hero