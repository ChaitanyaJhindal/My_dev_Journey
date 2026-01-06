const express = require('express');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "thisisarandomsecretforJWT";
const app = express();
app.use(express.json());

const users = [];

/*
-----------------------------------------
OLDER APPROACH (RANDOM TOKENS - NOT JWT)
-----------------------------------------

function generateToken() {
  const length = 10;
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

In this approach:
- Token was random
- Token had to be stored in DB
- Every request required DB lookup
- Server was NOT stateless
*/


// NOW WE USE JWT (BETTER APPROACH)

// SIGNUP
function signuphandler(req, res) {
  const { username, password } = req.body;

  users.push({
    username: username,
    password: password
  });

  res.json({
    message: "you are signed up"
  });
}

// SIGNIN
function signinhandler(req, res) {
  const { username, password } = req.body;

  const foundUser = users.find(function (u) {
    return u.username === username && u.password === password;
  });

  if (foundUser) {

    /*
      JWT APPROACH:
      - No random token generation
      - No storing token in DB
      - JWT itself contains user identity
    */
    const token = jwt.sign(
      { username: username }, // payload
      JWT_SECRET               // secret
    );

    res.json({
      token: token
    });
  } else {
    res.status(401).json({
      message: "Invalid username or password"
    });
  }
}

// PROTECTED ENDPOINT
function authenticatedep(req, res) {

  /*
    Earlier:
    - We used to match token from DB

    Now:
    - Client sends JWT in Authorization header
    - Server verifies JWT using secret
  */
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({
      message: "Token missing"
    });
    return;
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    /*
      decoded contains the payload we signed earlier
      Example: { username: "chaitanya" }
    */
    const foundUser = users.find(function (u) {
      return u.username === decoded.username;
    });

    if (foundUser) {
      res.json({
        username: foundUser.username
      });
    } else {
      res.status(401).json({
        message: "Unauthorized"
      });
    }

  } catch (err) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
}

app.post("/signup", signuphandler);
app.post("/signin", signinhandler);
app.get("/me", authenticatedep);

app.listen(3001);
