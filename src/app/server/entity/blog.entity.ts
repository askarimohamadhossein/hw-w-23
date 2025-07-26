import { randomUUID } from "crypto";

export class BlogEntity {
  id!: string;
  name!: string;
  body!: string;
  createdAt!: string;
  thumbnail!: string;

  constructor(data: IAddBlog) {
    this.name = data.name;
    this.body = data.body;
    this.id = randomUUID();
    this.createdAt = new Date().toISOString();
  }
}
