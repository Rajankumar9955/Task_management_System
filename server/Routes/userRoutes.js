

const express=require("express");
const route=express.Router();
const userControllers=require("../Controllers/userControllers");
const multer = require("multer");

route.post("/usercreate", userControllers.Usercreate);
route.post("/userlogin", userControllers.UserLogin);
route.get("/userdisplay", userControllers.UserDataDisplay);
route.post("/assigntask", userControllers.AssignTask);

route.post("/taskShow", userControllers.TaskShow);
route.post("/tasksubmit", userControllers.TaskSubmitByEmployee);

route.post("/resetemppass", userControllers.ResetEmployeePassword);
// ==========================================================

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/');   // Save files to uploads directory
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname); // Keep original file name
    }
});
const upload=multer({storage:storage});

route.post("/userphotoupload", upload.single("photo"), userControllers.UploadPhoto);

module.exports=route;