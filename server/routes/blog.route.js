import express from "express";
import {
  addBlog,
  deleteBlogById,
  getAllBlogs,
  getBlogById,
  togglePublish,
} from "../controllers/blog.controller";
import upload from "../middleware/multer";
import auth from "../middleware/auth";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), auth, addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/:blogId", auth, deleteBlogById);
blogRouter.post("/toggle-publish", auth, togglePublish);

export default blogRouter;
