const express = require('express');
const app = express();
app.use(express.json());

const users = [];

function generateToken() {
  const length = 10;
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function signuphandler(req, res) {
  const { username, password } = req.body;
  users.push({ username, password });

  res.json({ message: "you are signed up" });
}

function signinhandler(req, res) {
  const { username, password } = req.body;

  const foundUser = users.find(
    u => u.username === username && u.password === password
  );

  if (foundUser) {
    const token = generateToken();
    foundUser.token = token;

    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
}

function authenticatedep(req, res) {
  const token = req.headers.token; // or authorization
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].token === token) {
      foundUser = users[i];
      break;
    }
  }

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password
    });
  } else {
    res.status(401).json({
      message: "Unauthorized"
    });
  }
}

app.post("/signup", signuphandler);
app.post("/signin", signinhandler);
app.get("/me", authenticatedep);

app.listen(3001);
