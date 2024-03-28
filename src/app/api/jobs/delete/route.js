
'use server'
import { connectToDB } from "@/lib/mongoose";
import Job from "@/lib/models/Job.model";
export async function POST(req) {
    const data = await req.json();
    connectToDB();
    const job = await Job.deleteOne({ _id: data.id });
    await job.save()
    return Response.json({ deleted: true });
}
