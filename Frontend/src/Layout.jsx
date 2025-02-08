

import Header from "./Components/Header";
import TopMenu from "./Components/TopMenu";
import Footer from "./Components/Footer";
import MenuBar from "./Components/Menubar";
import { Outlet } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from "react-bootstrap/esm/Container";

import ViewData from "./Components/ViewData";
const Layout=()=>{
    return(
        <>
             <Header/>
             
{/* <Container> */}
      <Row>
        <Col  md="1">
        <div style={{height:"55px"}}>
        <MenuBar />
        </div>    
        </Col> 
        <Col >
        <div style={{height:"0px"}}>
             <TopMenu/>
        </div>
        </Col>
      </Row>
      {/* </Container> */}

      <div>
     {/* <Container> */}
              <Row>
              <Col  md="2">
              <div id="menu">
                       <ViewData/>
              </div>
              </Col>
              <Col  md="10">
              <div id="menuoulet">
              <Outlet/>
              </div>
              </Col>
              </Row>
      {/* </Container> */}
      </div>

             <Footer/>

        </>
    )
}
export default Layout;