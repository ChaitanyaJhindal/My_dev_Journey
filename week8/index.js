const express = require("express");
const { UserRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use("/user", UserRouter);
app.use("/course", courseRouter);

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://chaitanyavedansh_db_user:chaitanya123@cluster0.gdjxqnz.mongodb.net/coursesellingapp"
    );
    console.log("✅ Connected to MongoDB");

    app.listen(3000, () => {
      console.log("🚀 Server running on port 3000");
    });

  } catch (error) {
    console.log("❌ Not connected to MongoDB");
    console.error(error);
  }
}

connectDB();
