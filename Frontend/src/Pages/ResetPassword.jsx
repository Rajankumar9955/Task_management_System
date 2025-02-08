
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const ResetPassword=()=>{
  const navigate=useNavigate();
        const [input,setInput]=useState({});
        const [userid,setUserid]=useState("");

        useEffect(()=>{
              setUserid(localStorage.getItem("userid"))
        },[])

        const handleInput=(e)=>{
              const name=e.target.name;
              const value=e.target.value
              setInput(values=>({...values, [name]:value}));
              console.log(input);
        }
        const handleSubmit= async()=>{
            let api="http://localhost:8000/users/resetpassword";

            try {
                  const ans=await axios.post(api, {userid:userid, ...input});
                  message.success("Password SuccessFully Change!!");
                  navigate("/home");
            } catch (error) {
                message.error(error.response.data.msg)
            }
        }
        
    return(
        <>
           <div align="center" style={{border:"2px solid black",borderRadius:"15px", width:"400px"}} >
            <div style={{width:"85%",marginLeft:"8px"}}>
            <h4 style={{marginTop:"20px",marginBottom:"15px"}}>Reset Password</h4>

        <FloatingLabel controlId="floatingPassword" label="Old Password" className="mb-1">
          <Form.Control type="password" placeholder="Old Password" name='oldpassword' value={input.password} onChange={handleInput}  />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="New Password" className="mb-1">
          <Form.Control type="password" placeholder="New Password" name='newpassword'  value={input.password}  onChange={handleInput}/>
        </FloatingLabel>
      <Button variant="success" style={{marginBottom:"15px",marginTop:"15px"}} onClick={handleSubmit}>Success</Button>
           </div>
           </div>
        </>
    )
}
export default ResetPassword;