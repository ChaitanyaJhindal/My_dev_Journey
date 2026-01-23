const {Router} = require("express")
const adminRouter = Router();

adminRouter.post("/signup", function(req,res){
    res.json({
        message: "Signup endpoint"
    })
})

adminRouter.post("/signin",function(req,res){
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post("/course",function(req,res){
    res.json({
        message: "courses endpoint"
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