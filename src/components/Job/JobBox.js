import React from "react";
import classes from "./style.module.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArticleIcon from "@mui/icons-material/Article";
import SchoolIcon from "@mui/icons-material/School";
import Link from "next/link";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import {userLogin} from "@/lib/actions"
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
const JobBox = (props) => {
  const router=useRouter()
  function extractDate(inputString) {
  const regex = /(\d+)\s+(second|minute|hour|day|week|month|year)s?\s+ago/i;
  const match = inputString.match(regex);
  
  if (match) {
    const quantity = parseInt(match[1]);
    const unit = match[2].toLowerCase();
    const currentDate = new Date();
    
    switch (unit) {
      case 'second':
        currentDate.setSeconds(currentDate.getSeconds() - quantity);
        break;
      case 'minute':
        currentDate.setMinutes(currentDate.getMinutes() - quantity);
        break;
      case 'hour':
        currentDate.setHours(currentDate.getHours() - quantity);
        break;
      case 'day':
        currentDate.setDate(currentDate.getDate() - quantity);
        break;
      case 'week':
        currentDate.setDate(currentDate.getDate() - quantity * 7);
        break;
      case 'month':
        currentDate.setMonth(currentDate.getMonth() - quantity);
        break;
      case 'year':
        currentDate.setFullYear(currentDate.getFullYear() - quantity);
        break;
      default:
        break;
    }
    
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
    const day = currentDate.getDate();
    const monthName = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    
    return `${day} ${monthName} ${year}`;
  }
  
  return null;
}

// Example usage

  const d = new Date(props.date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let isNew;
  const newDate=new Date()
  const date =
    d.getDate() +
    " " +
    months[parseInt(d.getMonth() + 1) - 1] +
    " " +
    d.getFullYear();
    // if(newDate.getFullYear()-d.getFullYear()>1) return null;
    // if(newDate.getFullYear()!=d.getFullYear()){
    // console.log(months[parseInt(newDate.getMonth()+1)-1]+"  "+months[parseInt(d.getMonth()+1)-1])
    // console.log(months.indexOf(months[parseInt(d.getMonth()+1)])-months.indexOf(months[parseInt(newDate.getMonth()+1)]))
    // if(months.indexOf(months[parseInt(d.getMonth()+1)])-months.indexOf(months[parseInt(newDate.getMonth()+1)])>=6) return null;
  // }
  const deleteJob = async () => {
    const a = await fetch("http://localhost:4000/api/delete", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: props.id,
      }),
    });
    await a.json();
  };
  const apply = async ()=>{
    const res= await userLogin()
    if(res.loggedIn){
      router.push(props.link)
    }
    else{
      return toast.error("Please Log in Before Accessing the Link", {
        className: classes.toast,
      });
    }
  };
  return (
    <>
    <div key={Math.random(1) * 1000} className={classes.box}>
      {props.edit && (
        <div className={classes.edits}>
          <div className={classes.editIcon}>
            <EditIcon className={classes.iconn} />
          </div>
          <div onClick={deleteJob} className={classes.deleteIcon}>
            <DeleteIcon className={classes.iconn} />
          </div>
        </div>
      )}
      <div className={classes.heading}>
        <h1>{props.jobName}</h1>
        <h2>{props.companyName}</h2>
      </div>
      <div className={classes.column}>
        {props.experience && (
          <>
            <div className={classes.clbox}>
              <div className={classes.icon}>
                <WorkOutlineIcon className={classes.icon} />
              </div>
              <p>{props.experience}</p> {/*1-5 years*/}
            {/* <div className={classes.line}></div> */}
            </div>
          </>
        )}
        {props.salary && (
          <>
            <div className={classes.clbox}>
              <div className={classes.icon}>
                <CurrencyRupeeIcon className={classes.icon} />
              </div>
              <p>{props.salary}</p>
            </div>
            {/* <div className={classes.line}></div> */}
          </>
        )}
        {props.location && (
          <div className={classes.clbox}>
            <div className={classes.icon}>
              <LocationOnIcon className={classes.icon} />
            </div>
            <p>{props.location}</p>
          </div>
        )}
        {props.degree && (
          <>
            <div className={classes.clbox}>
              <div className={classes.icon}>
                <SchoolIcon className={classes.icon} />
              </div>
              <p>{props.degree}</p>
              {/* B.Tech CSE */}
            </div>
            {/* <div className={classes.line}></div> */}
          </>
        )}
        {props.role && (
          <div className={classes.clbox}>
            <div className={classes.icon}>
              <ArticleIcon className={classes.icon} />
            </div>
            <p>{props.role}</p>
            {/* Full Time Role */}
          </div>
        )}
      </div>
      <div className={classes.column}>
        <p className={classes.para}>{props.description}</p>
      </div>
      <div className={classes.footer}>
        <div className={classes.date}>
          <h1>Posted:</h1>
          <p>{props.scraped?extractDate(props.date):date}</p>
        </div>
        {/* <Link href={props.link}> */}
          <div onClick={apply} className={classes.apply}>
            <p>View & Apply</p>
            {/* <div className={classes.arro}> */}
              <div className={classes.arrow}></div>
            {/* </div> */}
          </div>
        {/* </Link> */}
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default JobBox;
