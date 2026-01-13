const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "thisismysecret";

mongoose.connect(
  "mongodb+srv://chaitanyavedansh_db_user:chaitanya123@cluster0.gdjxqnz.mongodb.net/new-experiment"
);

app.use(express.json());


// ---------- SIGNUP ----------
app.post("/signup", async function (req, res) {
  const email = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email,
    password,
    name
  });

  res.json({
    message: "User created"
  });
});


// ---------- SIGNIN ----------
app.post("/signin", async function (req, res) {
  const email = req.body.username;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email,
    password
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString()
      },
      JWT_SECRET
    );

    res.json({
      token
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials"
    });
  }
});


// ---------- AUTH MIDDLEWARE ----------
function auth(req, res, next) {
  const token = req.headers.authorization;   // CORRECT

  try {
    const decodedData = jwt.verify(token, JWT_SECRET);

    req.userid = decodedData.id;              // CORRECT
    next();
  } catch (err) {
    res.status(403).json({
      message: "Invalid token"
    });
  }
}


// ---------- CREATE TODO ----------
app.post("/todo", auth, async function (req, res) {
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId: req.userid,
    title,
    done
  });

  res.json({
    message: "Todo created"
  });
});


// ---------- GET TODOS ----------
app.get("/todos", auth, async function (req, res) {
  const todos = await TodoModel.find({
    userId: req.userid
  });

  res.json({
    todos
  });
});


// ---------- START SERVER ----------
app.listen(3000);
