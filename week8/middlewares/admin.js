const {JWT_ADMIN_PASSWORD}= require("../config");


function adminmiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = JWT_ADMIN_PASSWORD.verify(token, JWT_USER_PASSWORD);
    if(decoded){
        req.userID = decoded.id;
        next()
    }    
    else{
        res.status(403).json({
            message: "you are not signed in "
        })
    }
}
module.exports ={
    adminmiddleware
}