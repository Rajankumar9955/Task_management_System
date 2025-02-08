import axios from "axios";
import { useEffect, useState } from "react"

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { message } from "antd";

const AssignTask=()=>{
    const [data,setData]=useState([]);

    const [input,setInput]=useState({});
    const [empId, setEmpId]=useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const handleShow = (empid) => {
        setEmpId(empid)
        setShow(true);
    }

  
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
        try {
            let api="http://localhost:8080/users/assigntask";
            const response= axios.post(api,{empid:empId, ...input});
             message.success("Task Assigned");
        } catch (error) {
            console.log(error);
        }
           
    }


    const loadData= async()=>{
        try {
            let api="http://localhost:8080/users/userdisplay";
            const response=await axios.get(api);
            setData(response.data);
            console.log(data);
      } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        loadData();
    },[])
    
    let sno=0;
    const ans=data.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.designation}</td>
                <td>
                <Button variant="success" onClick={()=>{handleShow(key._id)}}>Assign Task</Button>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Assign Task</th>
        </tr>
        {ans}
      </thead>
      </Table>
{/* =================================== Model ==================== */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>

    <div style={{padding:"5px"}}>
     <div style={{width:"400px",marginLeft:"25px"}}>
     <Form>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Task Title</Form.Label>
        <Form.Control type="text" name="tasktitle" value={input.tasktile} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Completion Days</Form.Label>
        <Form.Control type="number"  name="comdays" value={input.compdays} onChange={handleInput}/>
        </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Description</Form.Label>
        <Form.Control as="textarea" rows={3}  cols={4} type="text" name="taskdescription" value={input.taskdescription} onChange={handleInput}/>
      </Form.Group>
    </Form>
      </div>
      </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Assign
          </Button>
        </Modal.Footer>
      </Modal>
      
        </>
    )
}
export default AssignTask