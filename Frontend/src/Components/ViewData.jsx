import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {message} from "antd"
const ViewData=()=>{

    const navigate=useNavigate();

   

   const logout=()=>{
         localStorage.clear();
         message.error("You are Log-out");
         navigate("/home");
   } 

   const prevent=(e)=>{
    e.preventDefault();
    navigate("/login")
   }
    return(
        <>
                  <div id="view">
                            <div id="view2">
                                <Link to="home" id="btn">Home</Link>
                            </div>
                            <div id="view1">
                                <Link to="insert" id="btn">Insert</Link>
                            </div>
                            <div  id="view1">
                                <Link to="display" id="btn">Display</Link>
                            </div>
                            <div id="view1">
                                <Link to="update" id="btn">Update</Link>
                            </div>
                            <div id="view1">
                                <Link to="search" id="btn">Search</Link>
                            </div>
                            <div id="view1">
                                <Link to="contact" id="btn">Contact</Link>
                            </div>
                  </div>
                
                  <div id="view3">
                    <div><a href="#" id="btn2" onClick={prevent}>Sign-in</a></div> |
                    <div><a href="#" id="btn2" onClick={logout}>Sign-out</a></div>
                  </div>
                  <div>
                          <div id="stgs"><a href="/registration" style={{marginLeft:"10px",textDecoration:"none"}}>Register</a></div>
                  </div>
        </>
    )
}
export default ViewData;