

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";

 const Insert=()=>{
    const [input,setInput]=useState({});

    const handleInput=(e)=>{
        const {name,value}=e.target;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
        let api="http://localhost:8000/cars/datasave";
        axios.post(api,input).then((res)=>{
            alert("Data Save!!")
            console.log(input);
        })
    }
    return(
        <>
        <div id='form1'>
       <div align="center" id='forms'>
       <FloatingLabel controlId="floatingInput" label="Car Name" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com" name='car_name' value={input.car_name} onChange={handleInput}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Car Model" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com"  name='car_model' value={input.car_model} onChange={handleInput}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Fuel Type" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com" name='fuel_type' value={input.car_fuel} onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Date Of Launch" className="mb-1">
        <Form.Control type="date" placeholder="name@example.com" name='launch_date' value={input.launch_date} onChange={handleInput}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Car Mileage" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com" name='car_mileage' value={input.car_mileage} onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Car Price" className="mb-1">
        <Form.Control type="number" placeholder="name@example.com" name='car_price' value={input.car_price} onChange={handleInput}/>
      </FloatingLabel>
      <Button variant="success" onClick={handleSubmit}>Save</Button>
       </div>
       </div> 
        </>
    )
}
export default Insert;