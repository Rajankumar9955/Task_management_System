

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link, Outlet, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import img from "../Images/Coding.Avif"
import { message } from 'antd';
const EmployeeDashboard=()=>{

const navigate=useNavigate()
const [username,setUserName]=useState("");

  useEffect(()=>{
              if(localStorage.getItem("username")==null)
              {
                navigate("/login")
              }
              else
              {
                setUserName(localStorage.getItem("username"))
              }
  },[])
    
  
  const logoutuser=()=>{
    localStorage.clear();
    message.success("You are Loged-out : "+ username);
    navigate("/login")
}

    return(
        <>
          <h4 align="center" style={{fontFamily:"cursive"}}>EMPLOYEE DASHBOARD</h4>
         <div style={{marginTop:"20px"}}>
    <Container fluid>
            <Row >
              <Col md="5" >
              <div id='bgpic1'>
              <div id='usercreatemain11' align="center">
                        <div id='usercreatesecond' align="center" >
                          <div id='img1'>
                            <img src={img} alt="Logo"  id='img2'/>
                          </div>
                              <div id='usercreat'>
                               <Link to="empprofile" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Profile</Link>
                              </div>
                              <div id='usercreat'>
                               <Link to="taskshow" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Your Task</Link>
                              </div>
                              <div id='usercreat'>
                               <Link to="resetemppass" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Reset Password</Link>
                              </div>

                              <Button variant="warning"  style={{marginTop:"20px"}} onClick={logoutuser}>Log-Out</Button>

                        </div>  
              </div>    
              
              </div>
              </Col>

              <Col md="7">
                           
                            <div id='outlett'>
                                <Outlet/>
                            </div>
              </Col>
            </Row>
    </Container>
    </div>
        </>
    )
}
export default EmployeeDashboard