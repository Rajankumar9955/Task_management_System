

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
const Search=()=>{
    const [carName,setcarName]=useState("");

    const [mydata,setMyData]=useState([]);
    const handleSubmit=()=>{
        let api="http://localhost:8000/cars/datasearch";
        axios.post(api,{carName:carName}).then((res)=>{
            setMyData(res.data);
        })
    }
  
    const ans=mydata.map((key)=>{
         // ======converting = Date = =========================//
         const dates=key.launch_date;
         const date = new Date(dates);
         const day = String(date.getDate()).padStart(2, '0');
         const month = String(date.getMonth() + 1).padStart(2, '0');
         const year = date.getFullYear();
         const formattedDate = `${day}-${month}-${year}`;
         // ============================================
        return(
            <>
            <tr>
                <td>{key.car_name}</td>
                <td>{key.car_model}</td>
                <td>{key.fuel_type}</td>
                <td>{formattedDate}</td>
                <td>{key.car_mileage} km/L</td>
                <td>₹ {key.car_price}</td>
            </tr>
            </>
        )
    })
    return(
        <>
           <h1 align="center">Search Here!!</h1>
           <div align="center" id='forms'>
       <FloatingLabel controlId="floatingInput" label=" Enter Car Name" className="mb-1">
        <Form.Control type="search" placeholder="name@example.com" value={carName} onChange={(e)=>{setcarName(e.target.value)}} />
      </FloatingLabel>
      <Button variant="success" onClick={handleSubmit}>Search</Button>
      </div>
      <hr size="2" />
      <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Car Name</th>
          <th>Car Model</th>
          <th>Fuel Type</th>
          <th>Launch Date</th>
          <th>Mileage</th>
          <th>Price</th>
        </tr>
        {ans}
      </thead>
      </Table>
            </div>
        </>
    )
}
export default Search;