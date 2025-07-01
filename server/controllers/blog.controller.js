export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, image, isPublished } =
      req.body;

    if (!title || !description || !category || !image) {
      return res.json({ success: false, message: "Missing required fields" });
    }
  } catch (error) {}
};
