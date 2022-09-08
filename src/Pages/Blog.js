import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import ResponsiveAppBar from "../Conmponants/NavBar";
import AlertDialog from "../Conmponants/Dialoge";
import EditDialougue from "../Conmponants/EditDialogue";



const Blog = () => {

const [data, setData] = useState([]);

useEffect(() => {
    load()
},[])

    const load = () => {
        fetch(`http://localhost:3001/users`)
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
        <h1 style={{textAlign: "center", color: "green"}}>Users</h1>
        <br/>
        <br/>
        <div style={{width: '50%'}}>
            <Button variant="contained" style={{position: "absolute", right: '250px', backgroundColor: 'blue'}}>Add New User  <EditDialougue Data={[data]} /> </Button>
            <Input type="text" placeholder="Search here" style={{position: "absolute", right: '550px', width: '300px'}} />

            </div>
            <br/>
            <br/>
            <br/>

            <table cellPadding={10} style={{width: '70%', marginLeft: "auto", marginRight: "auto", textAlign:  "center"}} >
                <thead>
                <tr style={{backgroundColor: 'blue', color: "white", padding: '20px'}}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Edit</th>
                    <th>Delelte</th>
                </tr>
                </thead>


                <tbody>
                {data.map((val, indx) => {
                    return(
                <tr>
                    <td>{val._id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.role}</td>
                    <td>{val.phone}</td>
                    <td>{val.city}</td>
                    <td>
                          <EditDialougue userData={[val]} />
                                                 
                    </td>
                    <td><AlertDialog id = {val._id} />  </td>  
                </tr>
                   )})}
                   </tbody>
            </table>
                </div>
    )
};

export default Blog;