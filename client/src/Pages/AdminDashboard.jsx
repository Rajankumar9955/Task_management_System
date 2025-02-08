
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { message } from 'antd';
import NavDropdown from 'react-bootstrap/NavDropdown';
const AdminDashboard=()=>{
    // const [isVisible,setisVisible]=useState(true)
    const navigate=useNavigate()
    const [user,setUser]=useState("");

    useEffect(()=>{
        if(localStorage.getItem("usertype")==null)
        {
            navigate("/login");
        }
        else{
            setUser(localStorage.getItem("usertype"));
        }
    },[])

    const logoutadmin=()=>{
        localStorage.clear();
        message.success("You are Loged-out : "+ user);
        navigate("/login")
    }
   
   
    return(
        <>
         <h4 align="center" style={{fontFamily:"cursive"}}>ADMIN DASHBOARD</h4>
        <div style={{marginTop:"20px"}}>
    <Container fluid>
            <Row>
              <Col md="4">
                       <div id='usercreatemain'>
                        <div id='usercreatesecond' align="center" >
                            <h4 style={{marginTop:"20px"}}>Welcome : {user}</h4>
                              <div id='usercreate'>
                               <Link to="userscreate" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >New Create</Link>
                              </div>
                              <div id='usercreate1'>
                               <Link to="assigntask" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Assign Task</Link>
                              </div>
                              <div id='usercreate1'>
                               <Link to="taskstatus" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Task Status</Link>
                              </div>
                              <div id='usercreate1'>
                               <Link to="adminprofile" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Profile</Link>
                              </div>
                              <div style={{border:"2px solid black",width:"180px",marginTop:"15px",fontWeight:"bold",borderRadius:"15px"}}>
                                     <NavDropdown title="Filter" id="basic-nav-dropdown">
                                     <NavDropdown.Item as={Link} to="taskfullycompleted">Fully Task Completed</NavDropdown.Item>
                                     <NavDropdown.Item  as={Link} to="taskpartiallycompleted"> Partially Completed</NavDropdown.Item>
                                     <NavDropdown.Item  as={Link} to="tasknotcompleted">Not Completed</NavDropdown.Item>
                                     </NavDropdown>
                              </div>
                              <Button variant="warning"  style={{marginTop:"20px"}} onClick={logoutadmin}>Log-Out</Button>
                        </div>
                       </div>
              </Col>
              <Col md="8">
                            <div>
                                <Outlet/>
                            </div>
              </Col>
            </Row>
    </Container>
    </div>
        </>
    )
}
export default AdminDashboard;