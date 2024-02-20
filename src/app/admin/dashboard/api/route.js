'use server'
import { connectToDB } from "@/lib/mongoose";
import Job from "@/lib/models/Job.model";
export async function POST(req) {
  const data = await req.json();
  console.log(data);
    connectToDB();
    const job=new Job(data);
    await job.save()
  return Response.json({ posted: true });
}
