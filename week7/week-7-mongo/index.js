const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {z} = require("zod");
mongoose.connect("mongodb+srv://chaitanyavedansh_db_user:chaitanya123@cluster0.gdjxqnz.mongodb.net/")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const { email, password, name } = req.body;
const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string().min(3).max(5),
    password: z.string().min(6)
});

const parsedData = requiredBody.safeParse(req.body);

if (!parsedData.success) {
    return res.status(400).json({
        message: "Incorrect format",
        error:parsedData.error
    });
}

let errorthrown = false;
try{
    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
        email,
        password: hashedPassword, // ✅ store hash
        name
    });
} catch(e){
   res.json({
    message: " User Already exists"
   })
   errorthrown = true;
}
if(!errorthrown){
    res.json({
        message:"You are signed Up "
    })
}
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    });
    const passwordMatch = await bcrypt.compare(password,response.password);
    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);



