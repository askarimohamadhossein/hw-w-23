import * as z from "zod";

export const BlogValidationSchema = z.object({
  name: z.string().min(5).max(200),
  body: z.string().min(10).max(1200),
});
