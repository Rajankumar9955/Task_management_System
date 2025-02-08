
import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const Display=()=>{
    
    
    const [data,setData]=useState([]);

    const loadData=()=>{
        let api="http://localhost:8000/cars/datadisplay";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    let sno=0;
    const ans=data.map((key)=>{
        sno++;
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
                <td>{sno}</td>
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
            <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
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
export default Display;