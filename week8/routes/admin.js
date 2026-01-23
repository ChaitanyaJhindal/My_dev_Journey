const {Router} = require("express")
const adminRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD}= require("../config");
const {adminSchema, adminModel, courseModel} = require("../db")

adminRouter.post("/signup", async function(req,res){
    try {
        const { email, password, firstname, lastname } = req.body;

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        await adminModel.create({
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
})

adminRouter.post("/signin", async function (req, res) {
  try {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        message: "Admin not found"
      });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Incorrect password"
      });
    }

    const token = jwt.sign(
      { id: admin._id },
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


adminRouter.post("/course",adminmiddleware , async function(req,res){
    const adminId = req.userId;
    const {title,description,imageURl, price}= req.body;
    const course = await courseModel.create({
      title , description , imageUrl , price , creatorId 
    })
    res.json({
        message: "courses created",
        courseId: course._id
    })
})

adminRouter.put("/course",function(req,res){
    res.json({
        message: "courses endpoint"
    })
})

adminRouter.get("/course",function(req,res){
    res.json({
        message: "courses endpoint"
    })
})

module.exports = {
    adminRouter
};