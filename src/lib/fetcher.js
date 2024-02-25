import React, { useState, useEffect, useMemo } from 'react';
import data from "@/data/company.json";
import JobBox from '@/components/Job/JobBox';
import Loader from "@/components/Loader/Loader";

const fetchData = async (company) => {
    let result = [];
    let apiUrl = data.data[company];
    
    if (apiUrl.includes("naukri.com")) {
        const response = await fetch('/companies/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: apiUrl }),
        });
        const data = await response.json();
        result = data.data.map(i => (
            <JobBox
                key={Math.random()}
                scraped={true}
                jobName={i.title}
                date={i.postingDate}
                salary={i.salary}
                companyName={company}
                experience={i.experience}
                location={i.location}
                description={i.description.slice(0, 100)}
                link={i.applyLink}
            />
        ));
    } else {
        const response = await fetch(apiUrl);
        const data = await response.json();
        result = data.flatMap(i => {
            if (i.postings) {
                return i.postings.map(j => (
                    <JobBox
                        key={Math.random()}
                        jobName={j.text}
                        date={j.createdAt}
                        companyName={company}
                        location={j.categories.location}
                        role={j.categories.commitment}
                        description={j.descriptionPlain.slice(0, 100)}
                        link={j.applyUrl}
                    />
                ));
            } else {
                return (
                    <JobBox
                        key={Math.random()}
                        jobName={i.text}
                        date={i.createdAt}
                        companyName={company}
                        location={i.categories.location}
                        role={i.categories.commitment}
                        description={i.descriptionPlain.slice(0, 100)}
                        link={i.applyUrl}
                    />
                );
            }
        });
    }
    
    return result;
};