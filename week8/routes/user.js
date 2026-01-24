const { Router } = require("express");
const UserRouter = Router();
const {userSchema, userModel, purchaseModel, courseModel} = require("../db")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD}= require("../config");
const { usermiddleware } = require("../middlewares/user");
UserRouter.post("/signup", async function (req, res) {
    try {
        const { email, password, firstname, lastname } = req.body;

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        await userModel.create({
            email: email,
            password: hashedPassword,
            firstname: firstname,
            lastname: lastname
        });

        res.json({
            message: "User signed up successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error while signing up",
            error: error.message
        });
    }
});



UserRouter.post("/signin", async function (req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            JWT_USER_PASSWORD
        );

        res.json({
            message: "Signin successful",
            token: token
        });

    } catch (error) {
        res.status(500).json({
            message: "Error while signing in",
            error: error.message
        });
    }
});





UserRouter.get("/purchases",usermiddleware,  async function(req, res) {
    const userId = req.userId;
    const purchases = await purchaseModel.find({
        userId,
    });
    const coursesData = await courseModel.find({

        _id: {in: purchases.map(x => x.courseId)}
    })
    res.json({
       purchases,
       coursesData
    });
});

module.exports = {
    UserRouter
};
