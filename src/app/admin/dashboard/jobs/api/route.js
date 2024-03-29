'use server'
import { connectToDB } from "@/lib/mongoose";
import Job from "@/lib/models/Job.model";
export async function POST(req) {
  const data = await req.json();
  console.log(data)
    connectToDB();
    const job=await Job.find();
    const njob=job.reverse()
    // Response.setHeader;
  return Response.json({ jobs: njob });
}
