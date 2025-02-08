





import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import {message} from "antd";
import { Link, Outlet, useNavigate } from 'react-router-dom';

 const Login=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            let api="http://localhost:8000/users/login";
            const response=await axios.post(api,{email:email,password:password})
            if(response.status==200)
            {
                localStorage.setItem("username",response.data.name);
                localStorage.setItem("useremail",response.data.email);
                localStorage.setItem("userid",response.data._id);
                console.log(response.data);

                navigate("/dashboard");

            }
        } catch (error) {
            message.error(error.response.data.msg);
        }
    }

    return(
        <>


        <div id='form2'>
       <div align="center" id='forms1'>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-1">
        <Form.Control type="email" placeholder="name@example.com"  name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Password" className="mb-1">
        <Form.Control type="Password" placeholder="name@example.com" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </FloatingLabel>
      <Button variant="success" onClick={handleSubmit}>Login Now</Button>
       </div>
       </div> 
        </>
    )
}
export default Login;