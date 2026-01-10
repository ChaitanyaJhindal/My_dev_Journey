const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const JWT_SECRET = "learningwebdevfromscratch";
const users = [];

app.use(express.json());


function auth(req,res,next){
  const token = req.headers.token;
  const decodedata = jwt.verify(token , JWT_SECRET)
  if(decodedata.username){
    req.username = decodedata.username;
    next()
  }
  else{
    res.json({
      message : "You are not logged in"
    })
  }
}

function logger(req,res,next){
  console.log(req.method + "request came ");
  next();
}


app.post("/signup", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password
  });

  res.json({
    message: "You are signed up"
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }

  if (!foundUser) {
    res.json({
      message: "Credentials are incorrect"
    });
    return;
  }

  const token = jwt.sign(
    { username: username },
    JWT_SECRET
  );

  res.json({
    token: token
  });
});

app.get("/get_password", auth ,  function (req, res) {
  const token = req.headers.token;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const username = decoded.username;   // BUG 1 fixed

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        foundUser = users[i];
      }
    }

    if (!foundUser) {
      res.json({ message: "User not found" });
      return;
    }

    res.json({                    // BUG 2 fixed (no semicolons inside object)
      username: foundUser.username,
      password: foundUser.password
    });

  } catch (e) {                    // BUG 3 fixed (JWT invalid handling)
    res.status(401).json({
      message: "Invalid token"
    });
  }
});

app.listen(3001);
