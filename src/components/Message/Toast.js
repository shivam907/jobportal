'use client'
import React from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const notifySuccess = (message) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    limit: 1,
    type: "success",
  });

export const notifyError = (message) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 2000,
         limit: 1,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "error",
  });

const Toast = (props) => {
  const onSubmit = (msg) => {
    notifySuccess(msg);
  };
  const onError = (msg) => {
    notifyError(msg);
  };
  props.type ? onError(props.msg) : onSubmit(props.msg);
  return <ToastContainer />;
};

export default Toast;
