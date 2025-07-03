import express from "express";
import { addBlog } from "../controllers/blog.controller";

const blogRouter = express.Router();

blogRouter.post("/add", addBlog);

export default blogRouter;
