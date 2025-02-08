

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link, useNavigate } from 'react-router-dom';


const MenuBar=()=>{
// const Mynav=useNavigate();
//   const [searchData,setSearchData]=useState("")
//   const handleSearch=()=>{
//     Mynav(`search/${searchData}`)
//   }

    return(
        <>
    <div>
        {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" style={{marginTop:"0px"}}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Welcome Boss
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <div style={{width:"350px"}}>       
                <Nav.Link as={Link}to="home" style={{width:"60px",marginLeft:"40%",color:"green"}}>Home</Nav.Link>
                 <Nav.Link as={Link}to="insert" style={{width:"60px",marginLeft:"40%",color:"green"}}>Insert</Nav.Link>
                 <Nav.Link as={Link}to="display"style={{width:"60px",marginLeft:"40%",color:"green"}}>Display</Nav.Link>
                 <Nav.Link as={Link}to="update" style={{width:"60px",marginLeft:"40%",color:"green"}}>Update</Nav.Link>
                 <Nav.Link as={Link}to="search" style={{width:"60px",marginLeft:"40%",color:"green"}}>Search</Nav.Link>
                 <Nav.Link as={Link}to="contact"style={{width:"60px",marginLeft:"40%",color:"green"}}>Contact</Nav.Link>
                 </div>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    // value={searchData} onChange={(e)=>{setSearchData(e.target.value)}}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </div>
        
        </>
    )
}
export default MenuBar