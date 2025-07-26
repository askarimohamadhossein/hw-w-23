import { Res } from "@/app/server/response";
import { BlogService } from "@/app/server/service/blog.service";
import { date } from "zod";

const blogService = new BlogService();

export function GET(request: Request) {
  return Res({ message: "GET/bloges" });
}

export async function POST(request: Request) {
  const body = await request.json(); // get the body of the request
  return blogService.addNewBlog(body); // add the blog to the list
}
export function PUT(request: Request) {
  return Res({ message: "PUT/bloges" });
}

export function DELETE(request: Request) {
  return Res({ message: "DELETE/bloges" });
}
