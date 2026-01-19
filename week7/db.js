const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Userh = new Schema({
  email: String,
  password: String,
  name: String
});

const Todoh = new Schema({
  title: String,
  done: Boolean,
  userId: Schema.Types.ObjectId
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
  UserModel,
  TodoModel
};
