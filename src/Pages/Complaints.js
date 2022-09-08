import React, {useEffect, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Input } from "@mui/material";
import ResponsiveAppBar from "../Conmponants/NavBar";
import { Link } from "react-router-dom";
import AlertDialog from "../Conmponants/Dialoge";





const Complaints = () => {

const [data, setData] = useState([]);

useEffect(() => {
    load()
},[])

    const load = () => {
        fetch(`http://localhost:3001/complains`)
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
        <h1 style={{textAlign: "center", color: "green"}}>Complaints</h1>
        <br/>
        <br/>
        <div style={{width: '50%'}}>
            {/* <Button variant="contained" style={{position: "absolute", right: '250px'}}>Add New User</Button> */}
            <Input type="text" placeholder="Search here" style={{position: "absolute", right: '550px', width: '300px'}} />

            </div>
            <br/>
            <br/>
            <br/>

            <table cellPadding={10} style={{width: '70%', marginLeft: "auto", marginRight: "auto", textAlign:  "center"}} >
                <thead>
                <tr style={{backgroundColor: 'blue', color: "white", padding: '20px'}}>
                    <th>ID</th>
                    <th>Complain By</th>
                    <th>Complain For </th>
                    <th>Complain</th>
                    <th>Edit</th>
                    <th>Delete</th>

                </tr>
                </thead>


                <tbody>
               
                {data.map((val, indx) => {
                    return(

               
                <tr>
                    <td>{val._id}</td>
                    <td>{val.complainby}</td>
                    <td>{val.complainfor}</td>
                    <td>{val.complain}</td>
                    <td>
                           <Link to="/ComplainAction"><EditIcon style={{paddingRight: '15px'}} /></Link> 
                    </td>
                    
                    <td>  
                    <AlertDialog complainId={val._id} />

                    </td>
                </tr>

)
})}
                 
                   </tbody>
            </table>
                </div>
    )
};

export default Complaints;