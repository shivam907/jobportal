"use client";
import React, { useState, useEffect, useMemo } from "react";
import data from "@/data/company.json";
import scrapData from "@/data/scrap.json";
import JobBox from "@/components/Job/JobBox";
import Loader from "@/components/Loader/Loader";
import classes from "./classes.module.css"
import { scraper } from "@/lib/scraper";
import Lay from "../Lay";
const fetchData = async (company) => {
  let result = [];
  let apiUrl = data.data[company];
  let jobArray = [];
  let location = [];
  let experience = [];
  if (apiUrl.includes("naukri.com")) {
    const data = scrapData[company];
    let loc = [];
    let exp = [];
    if(data.length==0){
      result=<p className={classes.no}>No Jobs Currently</p>
    }
    data.forEach((i) => {
      loc.push(i.location);
      exp.push(i.experience);
      jobArray.push({
        key: Math.random(),
        scraped: true,
        jobName: i.jobName,
        date: i.date,
        salary: i.salary,
        companyName: company,
        experience: i.experience,
        location: i.location,
        description: i.description.slice(0, 100),
        link: i.link,
      });
      result.push(
        <JobBox
          key={Math.random()}
          scraped={true}
          jobName={i.jobName}
          date={i.date}
          salary={i.salary}
          companyName={company}
          experience={i.experience}
          location={i.location}
          description={i.description.slice(0, 100)}
          link={i.link}
        />
      );
    });
    let nloc = [...new Set(loc)].sort();
    let nexp = [...new Set(exp)].sort();
    nloc.forEach((nl) => {
      location.push({ label: nl, value: nl });
    });
    nexp.forEach((nl) => {
      experience.push({ label: nl, value: nl });
    });
  } else {
    const response = await fetch(apiUrl);
    const data = await response.json();
    data.forEach((i) => {
      let loc = [];
      let exp = [];
      if (i.postings) {
        i.postings.forEach((j) => {
          loc.push(j.location);
          exp.push(j.experience);
          jobArray.push({
            key: Math.random(),
            jobName: j.text,
            date: j.createdAt,
            companyName: company,
            location: j.categories?.location,
            role: j.categories?.commitment,
            description: j.descriptionPlain?.slice(0, 100),
            link: j.applyUrl,
          });
          result.push(
            <JobBox
              key={Math.random()}
              jobName={j.text}
              date={j.createdAt}
              companyName={company}
              location={j.categories?.location}
              role={j.categories?.commitment}
              description={j.descriptionPlain?.slice(0, 100)}
              link={j.applyUrl}
            />
          );
        });
        let nloc = [...new Set(loc)].sort();
        let nexp = [...new Set(exp)].sort();
        nloc.forEach((nl) => {
          location.push({ label: nl, value: nl });
        });
        nexp.forEach((nl) => {
          experience.push({ label: nl, value: nl });
        });
      } else {
        loc.push(i.location);
        exp.push(i.experience);
        jobArray.push({
          key: Math.random(),
          jobName: i.text,
          date: i.createdAt,
          companyName: company,
          location: i.categories?.location,
          role: i.categories?.commitment,
          description: i.descriptionPlain?.slice(0, 100),
          link: i.applyUrl,
        });
        result.push(
          <JobBox
            key={Math.random()}
            jobName={i.text}
            date={i.createdAt}
            companyName={company}
            location={i.categories?.location}
            role={i.categories?.commitment}
            description={i.descriptionPlain?.slice(0, 100)}
            link={i.applyUrl}
          />
        );
        let nloc = [...new Set(loc)].sort();
        let nexp = [...new Set(exp)].sort();
        nloc.forEach((nl) => {
          location.push({ label: nl, value: nl });
        });
        nexp.forEach((nl) => {
          experience.push({ label: nl, value: nl });
        });
      }
    });
  }

  return { result, jobArray, experience, location };
};

const Page = (props) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobArray, setJobArray] = React.useState();
  const [location, setLocation] = React.useState([]);
  const [experience, setExperience] = React.useState([]);
  const [filterData, setFilterData] = React.useState();
  const memoizedFetchData = useMemo(() => fetchData, []);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const { result, jobArray, experience, location } =
        await memoizedFetchData(props.params.company);
      setJobs(result);
      setJobArray(jobArray);
      setExperience(experience);
      setLocation(location);
      setLoading(false);
    };

    fetchJobs();
  }, [memoizedFetchData, props.params.company]);

  return (
    <Lay
      jobArray={jobArray}
      setFilterData={setFilterData}
      location={location}
      experience={experience}
    >
      {loading ? <Loader /> : filterData?.length > 0 ? filterData : jobs}
    </Lay>
  );
};

export default Page;
