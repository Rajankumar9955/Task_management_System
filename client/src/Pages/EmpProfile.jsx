

import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { message ,Spin} from "antd";
import axios from "axios";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const EmpProfile=()=>{
    
    const [isVisible,setisVisible]=useState(true)
    const navigate=useNavigate();
        const [userid,setUserId]=useState("")
        const [username,setUserName]=useState("");
        const [useremail,setUserEmail]=useState("");
        const [designation,setDesignation]=useState("");
        
        
        const [myfile,setMyfile]=useState("");   //form 
    
        useEffect(()=>{
            if(localStorage.getItem("username")==null)
            {
                navigate("/login")
            }
            else
            {
                setUserId(localStorage.getItem("userid"))
                setUserName(localStorage.getItem("username"));
                setUserEmail(localStorage.getItem("useremail"));
                setDesignation(localStorage.getItem("designation"));
            
            }
        },[])

        const logoutuser=()=>{
            localStorage.clear();
            message.success("You are Loged-out : "+ username);
            navigate("/login")
        }
        const Resetpas=()=>{
            navigate("/empdashboard/resetemppass")
        }


          
        useEffect(()=>{
            setTimeout(() => {
                setisVisible(false)
            }, 1500);
            setisVisible(true)
        },[])

        const onChangeHandler=(e)=>{
            console.log(e.target.files[0]);
            setMyfile(e.target.files[0]);
        }


        const handleSubmit = async()=>{
           
                const formData=new FormData();
                formData.append('photo', myfile);
                formData.append('userid', userid);
                const response=await axios.post('http://localhost:8080/users/userphotoupload',formData)
                try {
                localStorage.setItem('imgname', response.data.imgname)
                message.success("Profile Updated!")
                navigate('/empdashboard/empprofile');
                
                        // document.getElementById('#fromphoto').style.display = 'none';
                        // document.getElementById('#formphotobtn').style.display = 'none';
                   

              } catch (error) {
                console.log(error);
            }  
        };
        

    return(
        <>
        {isVisible?(
            <div align="center" style={{marginTop:"100px"}}>
            <Spin tip="Loading" size="large"></Spin>
        </div>
        ):(
            <div id='usersection1'>
            <div id='usersection2' align="center" style={{marginTop:"15px"}}>
                 <div id='usersection3' >
                   
                     <div id='usersection4' align="center" >
                        <div style={{height:"80px",width:"80px", borderRadius:"50%", border:"2px solid white", overflow:"hidden",marginLeft:"110px"  }}>
                            <img src={`http://localhost:8080/uploads/${localStorage.getItem('imgname')}`} alt="img" width="80" height="80" id="divimg"/>
                        </div>
                     <div id="phto1">
                     <FloatingLabel controlId="floatingPassword" label="Upload File" className="mb-1" id="formphoto">
                <Form.Control type="file" placeholder="name@example.com" name='file' onChange={onChangeHandler}/>
                </FloatingLabel>
                    
                <Button variant="success" onClick={handleSubmit} size="sm" style={{width:"60px",height:"40px",marginTop:"10px"}} id="formphotobtn">Submit</Button>
                </div>
                     <h3 >Welcome :  {username}</h3>
                     <h6 >Email : {useremail}</h6>
                     <h6 >Your Designation : {designation}</h6>
                     <Button variant="warning"  style={{marginTop:"20px"}} onClick={logoutuser}>Log-Out</Button><br />
                     <Button variant="secondary"  style={{marginTop:"20px"}} onClick={Resetpas}>Reset Password</Button>
                        
                      <div>
                       <div>
                       </div>
                      </div>
                     </div>
                 </div>
            </div>
     </div>
     )} 
        
        </>
    )
}
export default EmpProfile