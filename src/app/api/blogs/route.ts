function Res(data: object, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export function GET(request: Request) {
  return Res({ message: "GET/bloges" });
}

export function POST(request: Request) {
  return Res({ message: "POST/bloges" });
}
export function PUT(request: Request) {
  return Res({ message: "PUT/bloges" });
}

export function DELETE(request: Request) {
  return Res({ message: "DELETE/bloges" });
}
