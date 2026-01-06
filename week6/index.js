// Import the express library
const express = require("express");

// Import the jsonwebtoken library
const jwt = require("jsonwebtoken");

// Create an instance of express application
const app = express();

// Use the express.json() middleware to parse the request body
app.use(express.json());

// Create an array to store the users username and password
const users = [];

// Create a secret key for the jwt token
const JWT_SECRET = "ilove100xdevsliveclasses";


// ------------------------------------
// SIGNUP ROUTE
// ------------------------------------

// Create a post request for the signup route
app.post("/signup", function (req, res) {

    // Get the username and password from the request body
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user is already signed up or not
    if (users.find((user) => user.username === username)) {
        // Send a response to the client that the user is already signed up
        return res.json({
            message: "You are already signed up!",
        });
    }

    // Check if the username has at least 5 characters or not
    if (username.length < 5) {
        // Send a response to the client that the username should have at least 5 characters
        return res.json({
            message: "You need to have at least 5 characters to sign up",
        });
    }

    // Push the username and password to the users array
    users.push({
        username: username,
        password: password,
    });

    // Send a response to the client that the user has signed up successfully
    res.json({
        message: "You have signed up successfully!",
    });
});


// ------------------------------------
// SIGNIN ROUTE
// ------------------------------------

// Create a post request for the signin route
app.post("/signin", function (req, res) {

    // Get the username and password from the request body
    const username = req.body.username;
    const password = req.body.password;

    // Find the user in the users array with the given username and password
    const foundUser = users.find(
        (user) => user.username === username && user.password === password
    );

    // Check if the user is found or not
    if (foundUser) {

        // Create a JWT token using the jwt.sign() function
        // The token contains the username inside its payload
        const token = jwt.sign(
            {
                username: foundUser.username,
            },
            JWT_SECRET
        );

        // Send a response to the client with the token
        return res.json({
            token: token,
            message: "You have signed in successfully!",
        });

    } else {
        // Send a response to the client that the credentials are invalid
        return res.json({
            message: "Invalid username or password!",
        });
    }
});


// ------------------------------------
// PROTECTED ROUTE (/me)
// ------------------------------------

// Create a get request for the me route
app.get("/me", function (req, res) {

    // Get the authorization header from the request
    const authHeader = req.headers.authorization;

    // Check if the authorization header is present or not
    if (!authHeader) {
        // Send a response to the client that the token is missing
        return res.json({
            message: "Token is missing!",
        });
    }

    // The authorization header is in the format:
    // "Bearer <token>"
    // So we split it and extract the actual token
    const token = authHeader.split(" ")[1];

    try {
        // Verify the token using the jwt.verify() function
        // This checks if the token is valid and not tampered
        const userDetails = jwt.verify(token, JWT_SECRET);

        // Find the user in the users array with the username from the token
        const foundUser = users.find(
            (user) => user.username === userDetails.username
        );

        // Check if the user is found or not
        if (foundUser) {
            // Send a response to the client with user details
            // (password should not be sent in real applications)
            return res.json({
                username: foundUser.username,
            });
        } else {
            // Send a response if the user does not exist
            return res.json({
                message: "Invalid token!",
            });
        }

    } catch (err) {
        // This block runs if the token is invalid or tampered
        return res.json({
            message: "Invalid token!",
        });
    }
});


// ------------------------------------
// START SERVER
// ------------------------------------

// Start the server on port 3000
app.listen(3000);
