
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import {message} from "antd";
 const Registration=()=>{
    const [input,setInput]=useState({});

    const handleInput=(e)=>{
        const {name,value}=e.target;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
        let api="http://localhost:8000/users/registration";
        axios.post(api,input).then((res)=>{
            message.success("Your Registration has Done!!");
            console.log(input);
        })
    }
    return(
        <>
        <div id='form2'>
       <div align="center" id='forms1'>
       <FloatingLabel controlId="floatingInput" label="Name" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com" name='name' value={input.name} onChange={handleInput}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-1">
        <Form.Control type="email" placeholder="name@example.com"  name='email' value={input.email} onChange={handleInput}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Password" className="mb-1">
        <Form.Control type="Password" placeholder="name@example.com" name='password' value={input.password} onChange={handleInput} />
      </FloatingLabel>
      <Button variant="success" onClick={handleSubmit}>Regiter Now</Button>
       </div>
       </div> 
        </>
    )
}
export default Registration;