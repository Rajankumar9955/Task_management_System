import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import { Link, Outlet } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboard=()=>{
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [useremail,setUseremail]=useState("");

    useEffect(()=>{
        if(localStorage.getItem("username")==null)
        {
            navigate("/home")
        }
        else
        {
            setUsername(localStorage.getItem("username"))
            setUseremail(localStorage.getItem("useremail"))
        }
    },[])
    const logout=()=>{
        localStorage.clear();
        navigate("/home")
    }
    return(
        <>
        <h1 align="center" style={{marginTop:"25px"}}>Dashboard</h1>
        <Container style={{marginTop:"50px"}}>
        <Row>
        <Col>
        <div style={{}}>
        <h1 style={{display:"flex"}}> Welcome : <p style={{marginLeft:"10px",color:"yellowgreen"}}> {username}</p></h1>
        <h1 style={{display:"flex"}}> Email : <p style={{marginLeft:"10px",color:"yellowgreen"}}> {useremail}</p></h1>
        <Button variant="warning" onClick={logout}>Logout</Button>
        </div>
        <div style={{marginTop:"20px"}}>
        <Link to="resetpass">ResetPassword</Link>
        </div>
        </Col>

        <Col>
        <div>
            <Outlet/>
        </div>
        </Col>
      </Row>
      </Container>
        </>
    )
}
export default Dashboard