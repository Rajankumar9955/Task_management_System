

const UserModels=require("../Models/UserModels")
const bcrypt=require("bcrypt");
const Registration=async(req,res)=>{
    const {name,email,password}=req.body;

    const salt=await bcrypt.genSalt(); 
    const passwordHash=await bcrypt.hash(password,salt);

    console.log(req.body);
    const ans=await UserModels.create({
        name:name,
        email:email,
        password:passwordHash
    })
    res.send(ans);
}


const Login=async(req,res)=>{
    const{email,password}=req.body;
    try {
        const User=await UserModels.findOne({email:email})
        // console.log(User)
        if(!User)
        {
             res.status(400).send({msg:"Invalid Email"});
        }
        const checkpass= await bcrypt.compare(password, User.password);
        // console.log(checkpass);
        if(checkpass)
        {
            res.status(200).send(User);
        }
        else
        {
            res.status(400).send({msg:"Invalid Password"});
        }
    } catch (error) {
        res.send("Error in Coding please Check CareFully!!");
    }
}
const ResetPassword=async(req,res)=>{
    const {userid,oldpassword,newpassword}=req.body;
    try {
        
        const data=await UserModels.findById(userid);
        console.log(data);
        const checkpass=await bcrypt.compare(oldpassword,data.password);
        if(checkpass)
        {
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(newpassword, salt);
            await UserModels.findByIdAndUpdate(userid,{password:passwordHash})
            res.status(200).send({msg:"SuccessFully Change Password!!"})
        }
        else
        {
            res.status(400).send({msg:"Old Password doesn't match!!"});
        }

    } catch (error) {
        console.log(error);
    }
}
module.exports={
    Registration,
    Login,
    ResetPassword
}