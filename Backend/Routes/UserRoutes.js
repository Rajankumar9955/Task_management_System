


const express=require("express");
const route=express.Router();
const UserLoginRegistration=require("../Controllers/UserLoginRegister");

route.post("/registration",UserLoginRegistration.Registration)
route.post("/login",UserLoginRegistration.Login)
route.post("/resetpassword",UserLoginRegistration.ResetPassword)


module.exports=route;