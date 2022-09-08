import React, {useEffect, useState} from "react";
import ResponsiveAppBar from "../Conmponants/NavBar";
import { Input } from "@mui/material";
import AlertDialog from "../Conmponants/Dialoge";
import EditDialougue from "../Conmponants/EditDialogue";





const ServiceDetails = () => {

const [data, setData] = useState([]);

useEffect(() => {
    load()
},[])

    const load = () => {
        fetch(`http://localhost:3001/services`)
            .then(res => res.json())   
            .then(data => {
                console.log(data)
                setData(data)
            })
}
        

    

  

    return (
        <div style={{ width: '100%'}}>
        <br/>
        <br/>
        <ResponsiveAppBar />
        <br/>
        <h1 style={{textAlign: "center", color: "green"}}>Service Details</h1>
        <br/>
        <br/>
        <div style={{width: '50%'}}>
            {/* <Button variant="contained" style={{position: "absolute", right: '250px'}}>Add New User</Button> */}
            <Input type="text" placeholder="Search here" style={{position: "absolute", right: '550px', width: '300px'}} />

            </div>
            <br/>
            <br/>
            <br/>

            <table cellPadding={10} style={{width: '90%', marginLeft: "auto", marginRight: "auto", textAlign:  "center"}} >
                <thead>
                <tr style={{backgroundColor: 'blue', color: "white", padding: '20px'}}>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Ustaad ID</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Service</th>
                    <th>Service Details</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>


                <tbody>
            {data.map((val, indx) => {
                return(
                <tr key={indx}>
                    <td>{val._id}</td>
                    <td>{val.userId}</td>
                    <td>{val.ustaadId}</td>
                    <td>{val.city}</td>
                    <td>{val.phone}</td>
                    <td>{val.field}</td>
                    <td>{val.problemStatement}</td>
                    <td>
                           
                           <EditDialougue serviceData={[val]} />
                    </td>
                    <td> <AlertDialog serviceId={val._id} /></td>
                </tr>
                     )
                    })}
    
                   </tbody>
            </table>
                </div>
    )
};

export default ServiceDetails;