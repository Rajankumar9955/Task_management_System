

import { message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import {Spin} from 'antd';

const UserCreate=()=>{
    const [input,setInput]=useState({});
    const [isVisible,setisVisible]=useState(true)
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
            let api="http://localhost:8080/users/usercreate";
             axios.post(api,input);
            message.success("Email Sent and User Created!!");
    }
    useEffect(()=>{
          setTimeout(() => {
            setisVisible(false)
          }, 1500);
          setisVisible(true)
    },[])
    return(
        <>
         {isVisible?(
            <div align="center" style={{marginTop:"100px"}}>
                <Spin tip="Loading" size="large"></Spin>
            </div>
            
         ):(
<div>
<div id='firstdiv1' align="center">
   <div id='seconddiv' align="center">
               <div id='modelss'>       
                  <FloatingLabel id='formsss' style={{marginTop:"20px"}}
                  controlId="floatingInput" label="Enter Name" className="mb-1">
                  <Form.Control type="text" placeholder="name@example.com"  name='name' value={input.name} onChange={handleInput}/>
                  </FloatingLabel>

                  <Form.Select aria-label="Default select example" id='formsss11' name='designation'  onChange={handleInput}>
                      <option >Select Designation</option>
                      <option value="Designer">Designer</option>
                      <option value="Backend">Backend</option>
                      <option value="Team Leader">Team Leader</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="Programmer">Programmer</option>
                      <option value="DataBase Designer">DataBase Designer</option>
                      <option value="Analyst">Anylist</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Developer">Developer</option>
                      <option value="HR">HR</option>
                      <option value="Manager">Manager</option>
                      <option value="Executive Manager">Executive Manager</option>
                      <option value="Mern FullStack Developer">Mern FullStack Developer</option>
                 </Form.Select>

                  <FloatingLabel controlId="floatingPassword" label="Enter Email" id='formsss'className="mb-1">
                  <Form.Control type="email" placeholder="Password"  name='email' value={input.email} onChange={handleInput}/>
                  </FloatingLabel>
                  
                 
                  <Button variant="success" id='btn' onClick={handleSubmit}>CREATE</Button>
                 
                  
               </div>
   </div>
</div>
</div>
         )}
         
        
        </>
    )
}
export default UserCreate