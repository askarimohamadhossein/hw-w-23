import { BlogValidationSchema } from "@/libs/validation/blog";
import z from "zod";
import { BlogEntity } from "../entity/blog.entity";
import { Res } from "../response";

export class BlogService {
  private readonly blogsList: BlogEntity[] = []; // list of blogs

  public getBlogs() {
    return Res({ blogs: this.blogsList }, 200); // return the response
  }

  public addNewBlog(data: IAddBlog) {
    try {
      BlogValidationSchema.parse(data); // validate the data
      const blog = new BlogEntity(data); // create a new blog
      this.blogsList.push(blog); // add the blog to the list
      return Res({ message: "Blog created successfully" }, 201); // return the response
    } catch (error) {
      if (error instanceof z.ZodError) {
        return Res({ errors: error.issues }, 400); // return the response
      }
      return Res({ error: "Blog creation failed" }, 500); // return the response
    }
  }
}
