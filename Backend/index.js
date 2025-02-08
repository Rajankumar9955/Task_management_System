const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const bodyparser=require("body-parser");
const CarRoute=require("./Routes/CarsRoutes")
const UserRoute=require("./Routes/UserRoutes")

const DataBase=process.env.DBCONNECTION;
const port=process.env.PORT;
mongoose.connect(DataBase).then((res)=>{
    console.log("Cars DataBase Connected!")
})

app.use(cors())

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/cars", CarRoute);
app.use("/users",UserRoute);

app.listen(port,()=>{
    console.log(`Server Run on ${port} Port!`)
})