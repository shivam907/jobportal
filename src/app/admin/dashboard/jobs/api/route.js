'use server'
import { connectToDB } from "@/lib/mongoose";
import Job from "@/lib/models/Job.model";
export async function GET() {
//   console.log(data);
    connectToDB();
    const job=await Job.find();
  return Response.json({ jobs: job });
}
