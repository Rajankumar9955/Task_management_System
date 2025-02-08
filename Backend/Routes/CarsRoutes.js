

const express=require("express");
const route=express.Router();
const CarsController=require("../Controllers/CarsControllers")

route.post("/datasave",CarsController.DataSave);
route.get("/datadisplay",CarsController.DataDisplay);
route.post("/datadelete",CarsController.DataDelete);
route.post("/editdatadisplay",CarsController.EditDataDisplay);
route.post("/editdatasave",CarsController.EditDataSave);
route.post("/datasearch",CarsController.DataSearch);

module.exports=route;