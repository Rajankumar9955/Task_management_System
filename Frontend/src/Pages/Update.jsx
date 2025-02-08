
import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import dltimg from "../Images/dltimg.png"
import edtimg from "../Images/editimg.jpg"
import {useNavigate} from "react-router-dom";
const Update=()=>{
    const [data,setData]=useState([]);
     const navigate=useNavigate();
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
    
    const mydel=(id)=>{
        let api="http://localhost:8000/cars/datadelete"
        axios.post(api,{id:id}).then((res)=>{
            alert("Data Deleted!!")
            loadData();
        })
    }

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
                <td>
                    <a href="#" onClick={()=>{navigate(`/editdata/${key._id}`)}}>
                        <img src={edtimg} alt="" className="update" />
                        </a>
                </td>
                <td>
                     <a href="#" onClick={()=>{mydel(key._id)}}>
                        <img src={dltimg} alt="" className="update"/>
                        </a>
                </td>
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
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {ans}
      </thead>
      </Table>
            </div>
        </>
    )
}
export default Update;