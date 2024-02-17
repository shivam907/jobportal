export  async function GET() {
  // if (req.method === "GET") {
  return Response.json({ data: [1,2,3] })
  // }
  // else {
  //   res.status(405).json({ success: false, message: 'Method Not Allowed' });
  // }
}
