



import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { message } from 'antd';

const TaskShow=()=>{
    const empid=localStorage.getItem("userid");

    const [taskStatus,setTaskStatus]=useState("")


     const [Data,setdata]=useState([]);
    
        const loadData=async()=>{
           let api="http://localhost:8080/users/taskShow";
           try {
             const response=await axios.post(api, {empid:empid})
             setdata(response.data);
             console.log(response.data);
           } catch (error) {
             console.log(error)
           }
        }
        useEffect(()=>{
            loadData()
         },[])



         const handleSubmit=async(taskid)=>{
          try {
            let api="http://localhost:8080/users/tasksubmit";
            const response=await axios.post(api,{taskid:taskid, taskStatus:taskStatus});
            message.success(response.data);
            loadData();
          } catch (error) {
            console.log(error);
          }
         }

     let sno=0;
    const ans=Data.map((key)=>{
      sno++
      return(
        <>
                   <tr>
                    <td>{sno}</td>
                    <td>{key.tasktitle}</td>
                    <td>

                    <details>
                    <summary>Description</summary>
                    <td>{key.taskdescription}</td>
                    </details>
                    </td>

                    <td>{key.completiondays}</td>

                    <td>
                             <Form.Select size="sm" name="taskStatus" value={taskStatus} onChange={(e)=>{setTaskStatus(e.target.value)}}>
                             <option>Select</option>
                             <option value="Fully Completed">Fully Completed</option>
                             <option value="Partially Completed">Partially Completed</option>
                             <option value="Not Completed">Not Completed</option>
                             </Form.Select>
                    </td>

                    <td>
          {key.report=="Submitted"?(<Button disabled>Submitted</Button>):(  <Button  id='btn' onClick={()=>{handleSubmit(key._id)}}>Assign</Button>)}        
                    </td>
                   </tr>
        </>
      )
    })
    return(
        <>
        
        <div id='usersection11' >
           <h4 align="center"style={{marginTop:"10px",marginBottom:"10px"}}>Your Task</h4>  
                               
           <Table striped bordered hover variant="light"  style={{width:"100%"}}>
      <thead>
        <tr>
          <td>Sno</td>
          <th>Task Title</th>
          <th>Description</th>
          <th>Total Days</th>
          <th>Status</th>
          <th>Send Report</th>
        </tr>
        {ans}
      </thead>
      </Table>            
    
        </div>
        
        </>
    )
}
export default TaskShow