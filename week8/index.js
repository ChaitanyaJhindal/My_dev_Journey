const express = require("express");
const { UserRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/user", UserRouter);
app.use("/course", courseRouter);

const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");

    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  } catch (error) {
    console.log("❌ Not connected to MongoDB");
    console.error(error);
  }
}

connectDB();
