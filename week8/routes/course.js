const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async function (req, res) {
  try {
    const userId = req.userId;
    const { courseId } = req.body;

    await purchaseModel.create({
      userId,
      courseId
    });

    res.json({
      message: "Course purchased successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "Purchase failed",
      error: err.message
    });
  }
});

courseRouter.get("/preview", async function (req, res) {
  try {
    const courses = await courseModel.find({});

    res.json({
      courses: courses
    });

  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch courses",
      error: err.message
    });
  }
});

module.exports = {
  courseRouter
};
