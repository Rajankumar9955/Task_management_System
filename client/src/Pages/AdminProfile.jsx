import { message, Spin } from "antd";
import { useEffect, useState } from "react"
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const AdminProfile=()=>{
    const [isVisible,setisVisible]=useState(true)
    const navigate=useNavigate();
    const [usertype,setusertype]=useState("")
    const [adminemail,setadminemail]=useState("");

    useEffect(()=>{
        if(localStorage.getItem("usertype")==null)
        {
            navigate("/login")
        }
        else
        {
            setusertype(localStorage.getItem("usertype"));
            setadminemail(localStorage.getItem("adminemail"));
        }
        
    },[])

    useEffect(()=>{
        setTimeout(() => {
            setisVisible(false)
        }, 1500);
        setisVisible(true)
    },[])
    const logoutadmin=()=>{
        localStorage.clear();
       navigate("/login")
       message.error(usertype+" You Are Logged-out")
    }
    const ResetPass=()=>{
        navigate("/admindashboard/resetadminpass")
    }
    return(
        <>
        {isVisible?(
            <div align="center" style={{marginTop:"100px"}}>
            <Spin tip="Loading" size="large"></Spin>
        </div>
        ):(
            <div id='usersection1'>
                                   <div id='usersection2' align="center" style={{marginTop:"3px"}}>
                                        <div id='usersection3' >
                                            <div id='usersection4' align="center"  style={{marginTop:"90px"}}>
                                            <h3 style={{marginLeft:"40px"}}>Welcome :  {usertype}</h3>
                                            <h6 style={{marginLeft:"40px"}}>Email : {adminemail}</h6>
                                            <Button variant="warning"  style={{marginTop:"20px"}} onClick={logoutadmin}>Log-Out</Button><br />
                                            <Button variant="secondary"  style={{marginTop:"20px"}} onClick={ResetPass}>Reset Password</Button>

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
export default AdminProfile