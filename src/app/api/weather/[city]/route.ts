import { NextRequest } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ city: string }> }
) {
  const city = (await params).city;
  return new Response(JSON.stringify({ city, name: `User ${city}` }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
