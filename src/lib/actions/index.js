"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export const adminLogin =  () => {
  try{
  const data = cookies().get("session");
  if (!data) {
    return { loggedIn: false };
  }
  const decodedToken = jwt.verify(data.value, "secret");
  return { loggedIn: decodedToken.loggedIn };
}
catch(e){
return { loggedIn: false };
}
};
export const userLogin =  () => {
  const data = cookies().get("login");
  if (!data || data.value=='false') {
    return { loggedIn: false };
  }
  const decodedToken = jwt.verify(data.value, "secret");
  return { loggedIn: decodedToken };
};
