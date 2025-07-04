import express from "express";
import { addBlog } from "../controllers/blog.controller";
import upload from "../middleware/multer";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), addBlog);

export default blogRouter;
