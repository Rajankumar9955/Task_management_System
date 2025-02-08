

const nodemailer=require("nodemailer");

require("dotenv").config();
const passkeys=process.env.PASSKEYS;

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'krajan92946@gmail.com',
        pass:passkeys,
    },
});

transporter.verify((error,success)=>{
    if(error)
    {
        console.log('Error Connnecting to email services:', error)
    }
    else
    {
        console.log('Email Service ready to send Message')
    }
});
module.exports=transporter;