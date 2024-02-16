import React from "react";
import classes from "../style.module.css"
const Message = (props) => {

  const d = new Date(props.date);
  const date =
    d.getDate() + "-" + parseInt(d.getMonth() + 1) + "-" + d.getFullYear();
  return <div className={classes.msg}>
        <div className={classes.msrg}>
            <h1>Name: </h1>
            <p>{props.firstName} {props.lastName}</p>
        </div>
        <div className={classes.msrg}>
            <h1>Email: </h1>
            <p>{props.email}</p>
        </div>
        <div className={classes.msrg}>
            <h1>Subject: </h1>
            <p>{props.subject}</p>
        </div>
        <div className={classes.msrg}>
            <h1>Message: </h1>
            <p>{props.message}</p>
        </div>
        <div className={classes.msrg}>
            <h1>Posted on: </h1>
            <p>{date}</p>
        </div>
      </div>;
};

export default Message;
