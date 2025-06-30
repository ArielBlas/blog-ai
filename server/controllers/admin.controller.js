import jwt from "jsonwebtoken";

export const adminLogin = (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({ sucess: false, message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { email: process.env.ADMIN_EMAIL },
      process.env.JWT_SECRET
    );
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
