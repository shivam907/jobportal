"use client"
import React from 'react'
import data from "@/data/company.json";
import JobBox from '@/components/Job/JobBox';
const page = (props) => {
    const [job, setJob] = React.useState();
    React.useEffect(()=>{
        const fun = async()=>{
        if(data.data[props.params.company].includes("naukri.com")){
            const a = await fetch('/companies/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: data.data[props.params.company] }),
            })
            const b = await a.json();
            console.log(b)
            let arr = [];
            b.data.forEach((i) => {
              arr.push(
                <JobBox
                key={Math.random()}
                scraped={true}
                  jobName={i.title}
                  date={i.postingDate}
                  salary={i.salary}
                  companyName={props.params.company}
                  experience={i.experience}
                  location={i.location}
                  description={i.description.slice(0, 100)}
                  link={i.applyLink}
                />
              );
            });
            setJob(arr);
        }
        else{
        const a = await fetch(data.data[props.params.company]);
        const b = await a.json();
        console.log(b)
        let arr = [];
        b.forEach((i) => {
            console.log(i)
            if(i.postings){
                i.postings.forEach((j) => {
                arr.push(
                    <JobBox
                    key={Math.random()}
                    jobName={j.text}
                    date={j.createdAt}
                    companyName={props.params.company}
                    location={j.categories.location}
                    role={j.categories.commitment}
                    description={j.descriptionPlain.slice(0, 100)}
                    link={j.applyUrl}
                    />
                );
            });
        }
        else {
            arr.push(
              <JobBox
              key={Math.random()}
                jobName={i.text}
                date={i.createdAt}
                companyName={props.params.company}
                location={i.categories.location}
                role={i.categories.commitment}
                description={i.descriptionPlain.slice(0, 100)}
                link={i.applyUrl}
              />
            );
        }
        });
        setJob(arr)}
        }
        fun()
    },[])
  return (
    <>{job}</>
  )
}

export default page