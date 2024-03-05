"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export const adminLogin =  () => {
  const data = cookies().get("session");
  if (!data) {
    return { loggedIn: false };
  }
  console.log(data.value);
  const decodedToken = jwt.verify(data.value, "secret");
  console.log("iol", decodedToken);
  return { loggedIn: decodedToken.loggedIn };
};
export const userLogin =  () => {
  const data = cookies().get("login");
  console.log("bc", data)
  if (!data || data.value=='false') {
    console.log("fuddu")
    return { loggedIn: false };
  }
  console.log(data.value);
  const decodedToken = jwt.verify(data.value, "secret");
  console.log("iol", decodedToken);
  return { loggedIn: decodedToken };
};
