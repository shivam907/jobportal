"use client"
import React from 'react'
import data from "@/data/company.json";
import JobBox from '@/components/Job/JobBox';
const page = (props) => {
    const [job, setJob] = React.useState();
    React.useEffect(()=>{
        const fun = async()=>{
        console.log(data.data[props.params.company])
        const a = await fetch(data.data[props.params.company]);
        const b = await a.json();
        console.log(b)
        let arr = [];
        b.forEach((i) => {
            console.log(i)
            if(i.postings){
                console.log("posting")
                i.postings.forEach((j) => {
                arr.push(
                    <JobBox
                    jobName={j.text}
                    date={j.createdAt}
                    companyName="Clevertap"
                    location={j.categories.location}
                    role={j.categories.commitment}
                    description={j.descriptionPlain.slice(0, 100)}
                    link={j.applyUrl}
                    />
                );
            });
        }
        else {
            console.log("no posting")
            arr.push(
              <JobBox
                jobName={i.text}
                date={i.createdAt}
                companyName="Coupa"
                location={i.categories.location}
                role={i.categories.commitment}
                description={i.descriptionPlain.slice(0, 100)}
                link={i.applyUrl}
              />
            );
        }
        });
        setJob(arr)
        }
        fun()
    },[])
  return (
    <>{job}</>
  )
}

export default page