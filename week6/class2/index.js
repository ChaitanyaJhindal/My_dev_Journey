const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const JWT_SECRET = "learningwebdevfromscratch";
const users = [];

app.use(express.json());
app.use(cors());


// Logger middleware
function logger(req, res, next) {
  console.log("\nNew Request:", req.method, req.url);
  next();
}


// Auth middleware
function auth(req, res, next) {
  const token = req.headers.token;
  console.log("Token received:", token);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("Token verified. User =", decoded.username);

    req.username = decoded.username;
    next();
  } catch (e) {
    console.log("Token invalid");
    res.status(401).json({ message: "Invalid or missing token" });
  }
}


// Routes

app.post("/signup", logger, (req, res) => {
  console.log("Signup body:", req.body);

  const { username, password } = req.body;
  users.push({ username, password });

  console.log("Users:", users);

  res.json({ message: "You are signed up" });
});


app.post("/signin", logger, (req, res) => {
  console.log("Signin body:", req.body);

  const { username, password } = req.body;

  const foundUser = users.find(
    u => u.username === username && u.password === password
  );

  if (!foundUser) {
    console.log("Invalid credentials");
    return res.json({ message: "Credentials are incorrect" });
  }

  const token = jwt.sign({ username }, JWT_SECRET);
  console.log("JWT created:", token);

  res.json({ token });
});


app.get("/get_password", logger, auth, (req, res) => {
  console.log("Logged in user:", req.username);

  const foundUser = users.find(u => u.username === req.username);

  if (!foundUser) {
    console.log("User not found");
    return res.json({ message: "User not found" });
  }

  res.json({
    username: foundUser.username,
    password: foundUser.password
  });
});


app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
