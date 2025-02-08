


const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const path=require("path");
require("dotenv").config();
const bodyparser=require("body-parser");

const AdminRoutes=require("./Routes/adminRoutes"); //admin Routes

const UserRoutes=require("./Routes/userRoutes");  //user Routes

const DataBase=process.env.DBCONNECTION
const port=process.env.PORT

mongoose.connect(DataBase).then((res)=>{
    console.log("Database Connected!!");
})

app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/admin", AdminRoutes) 
app.use("/users", UserRoutes) 

app.listen(port, ()=>{
    console.log(`Server Run on ${port} Port!`);
})