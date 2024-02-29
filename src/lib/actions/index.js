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
