const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET ="learningwebdevfromscratch"
const users =[];

app.use(express.json());

app.post("/signup",function(req,res){
    const username = req.body.username
    const password = req.body.password
    users.push({
        username:username ,
        password:password 
    })
    res.json({
        message:"You are signed up"
    })
})


app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    let foundUser =null;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username && users[i].password===password){
            foundUser=users[i];
        }
    }
    if(!foundUser){
        res.json({
            message: "Credentials are incorrect"
        })
        return 
    }
    else{
        const token = jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token:token
        })
        console.log("You are signed in with JWt returned back to u sir ")
    }
})

app.post("/me",function(req,res){
    
})
app.listen(3001);