

const express=require("express");
const route=express.Router();
const adminController=require("../Controllers/adminControllers")

route.post("/adminlogin", adminController.AdminLogin);
route.get("/taskstatus", adminController.TaskStatus);
route.post("/reassigntask", adminController.ReAssignTask);

module.exports=route