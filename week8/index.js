const express = require("express");
const { UserRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/v1/user", UserRouter);


// All admin-related requests will go to /api/v1/admin
app.use("/api/v1/admin", adminRouter);

// All course-related requests will go to /api/v1/course
app.use("/api/v1/course", courseRouter);

const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");

    app.listen(port, () => {
      console.log(` Server running on http://localhost:${port}`);

      console.log(" User APIs:");
      console.log(`  POST  http://localhost:${port}/api/v1/user/signup`);
      console.log(`  POST  http://localhost:${port}/api/v1/user/signin`);
      console.log(`  POST  http://localhost:${port}/api/v1/admin/signin`);
      console.log(`  POST  http://localhost:${port}/api/v1/admin/signup`);
    });

  } catch (error) {
    console.log("❌ Not connected to MongoDB");
    console.error(error);
  }
}


connectDB();
