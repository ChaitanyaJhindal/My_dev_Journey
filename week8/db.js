const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = mongoose.Types.ObjectId;

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://chaitanyavedansh_db_user:chaitanya123@cluster0.gdjxqnz.mongodb.net/coursesellingapp"
    );
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.log("❌ Not connected to MongoDB");
    console.error(error);
  }
}

connectDB();



const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

const userModel = mongoose.model("User", userSchema);
const adminModel = mongoose.model("Admin", adminSchema);
const courseModel = mongoose.model("Course", courseSchema);
const purchaseModel = mongoose.model("Purchase", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
