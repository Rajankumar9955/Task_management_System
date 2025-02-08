// import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { message, Spin } from "antd";
import wrongimg from "../Images/rightimg.jpeg";
import rightimg from "../Images/wrongimg.jpeg"
const TaskStatus=()=>{
    const [Data,setData]=useState([]);
    const [isVisible,setisVisible]=useState(true);
    const loadData=async()=>{
        try {
            let api="http://localhost:8080/admin/taskstatus";
            const response=await axios.get(api);
            setData(response.data);
            console.log(Data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        loadData()
    },[])

    useEffect(()=>{
        setTimeout(() => {
            setisVisible(false)
        }, 1500);
        setisVisible(true)
    },[])

     const ReAssign=async(taskid)=>{
        let api="http://localhost:8080/admin/reassigntask";
        try {
            const response=await axios.post(api,{taskid:taskid});
            message.success(response.data.msg)
        } catch (error) {
            console.log(error)
        }
     }

    let sno=0;
    const ans=Data.map((key)=>{

        // sno++;
        if(key.taskstatus=='Not Submitted'){
        return(
            <>
            <tr>
                <td>{key.report=="Submitted"?(<img src={wrongimg} height="50" width="60"/>):(<img src={rightimg} height="45" width="50"/>)}</td>
                {/* <td>{sno}</td> */}
                <td>{key.empid.name}</td> 
                <td>{key.empid.email}</td>
                <td>{key.empid.designation}</td>
{/* --------------------------- This is Task Details inside the table------------- */}
               
               <details>
               <summary>Details</summary>
        <Table striped bordered hover size="sm">
           <thead>

                <tr>
                    <th>Task Title</th>
                    <th>Completion Days</th>
                    <th>Task Description</th>
                </tr>
                  
         </thead>
         <tbody>
                   
                <tr>
                    <td>{key.tasktitle}</td>
                    <td>{key.completiondays}</td>
                    <td>{key.taskdescription}</td>
                </tr>
        </tbody>
                </Table>
               </details>
        {/* --------------------------------------- */}
                <td>{key.taskstatus}</td>
               <td>
                {key.report=="Submitted"?(
                    <span style={{color:"green",fontWeight:"bold"}}>{key.report}</span>
                ):(
                    <span style={{color:"red",fontWeight:"bold"}}>{key.report}</span>
                )}
               </td>
             <td>
                <Button variant="primary" style={{width:"100px"}} size="sm" onClick={()=>{ReAssign(key._id)}}>Re-Assign</Button>
             </td>
            </tr>
            </>
        )
    }
    })
    return(
        <>
      {isVisible?(          
        <div align="center" style={{marginTop:"100px"}}>
            <Spin tip="Loading" size="large"></Spin>
        </div>
        ):(
        <div id="formstatus">
        <Table striped bordered hover variant="light"  style={{width:"100%"}}>
        <thead>
        <tr>
          <th>Status</th>
          {/* <th>Sno</th> */}
          <th>Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Task Details</th>
          <th>Task Status</th>
          <th>Report</th>
          <th>Re-Assign</th>
        </tr>
        
        </thead>
        <tbody>
        {ans}
        </tbody>
        </Table>
        </div>
              )}
                
                </>
            )
        }
export default TaskStatus