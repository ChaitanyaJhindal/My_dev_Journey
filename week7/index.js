const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {UserModel,TodoModel} = require("./db");
const jwt = require("jsonwebtoken")
const JWT_SECRET="thisismysecret";

mongoose.connect("mongodb+srv://chaitanyavedansh_db_user:chaitanya123@cluster0.gdjxqnz.mongodb.net/new-experiment")

app.use(express.json());

app.post("/signup", async function(req,res){
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
   //end 

app.post("/signin", async function(req,res){
    const email = req.body.username;
    const password = req.body.password;

    const user= await UserModel.findOne({
       email:email,
       password:password
    })

    console.log(user);

    if(user){
        const token =jwt.sign({
            id:user._id
        },JWT_SECRET);
        res.json({
            token: token
        });
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo",function(req,res){

});

app.get("/todos",function(req,res){

});

app.listen(3000);