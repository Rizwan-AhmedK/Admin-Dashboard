import { blue } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import ListDividers from "../Conmponants/divider";
import ResponsiveAppBar from "../Conmponants/NavBar";
import { useEffect, useState } from "react";


const Home = () => {

    const [service, setService] = useState([]);
    const [users, setUsers] = useState([]);
    const [complain, setComplain] = useState([]);
    const [ratting, setRatting] = useState([]);
    const [ustaad, setustaad] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:3001/users`)
        .then(res => res.json())   
        .then(data => {
            console.log(data)
            setUsers(data)
        })


        fetch(`http://localhost:3001/services`)
        .then(res => res.json())   
        .then(data => {
            console.log(data)
            setService(data)
        })


        fetch(`http://localhost:3001/complains`)
        .then(res => res.json())   
        .then(data => {
            console.log(data)
            setComplain(data)
        })

        

        fetch(`http://localhost:3001/ustaadlist`)
        .then(res => res.json())   
        .then(data => {
        console.log(data)
        setustaad(data)
    })


    fetch(`http://localhost:3001/rattingsDetails`)
    .then(res => res.json())   
    .then(data => {
    console.log(data)
    setRatting(data)
})
            
    }, [])


    return (
        <>
        <br/>
        <ResponsiveAppBar />
        <div style={{width: '100%', display: "flex", marginTop: '100px', textAlign: "center", backgroundColor: "white"}}>
            <div style={{width: '20%', backgroundColor: 'white',  margin: '10px'}}>
                <h4 style={{backgroundColor: '#1976d2', padding: '20px', margin: '10px', borderRadius: '10px'}}>ADMIN DASHBOARD</h4>
                <ListDividers />
            </div>

            <div style={{width: '80%', backgroundColor: 'white',  margin: '10px', display: "flex", padding: '30px', justifyContent: "center"}}>
                <div style={{width: '25%', backgroundColor: '#1976d2', margin: '10px', padding: '35px', borderRadius: '10px', justifyContent:"center", alignItems: "center"}}>
                    <h2>{service.length}</h2>
                    <p>Services</p>
                </div>

                <div style={{width: '25%', backgroundColor: 'red', margin: '10px', padding: '35px', borderRadius: '10px'}}>

                    <h2>{complain.length}</h2>
                    <p>Compalints</p>
                </div>

                <div style={{width: '25%', backgroundColor: 'lightgreen', margin: '10px', padding: '35px', borderRadius: '10px'}}>
                <h2>{users.length}</h2>
                    <p>Active Users</p>
                </div>


                <div style={{width: '25%', backgroundColor: 'cyan', margin: '10px', padding: '35px', borderRadius: '10px'}}>
                    <h2>{ustaad.length}</h2>
                    <p>Registered Mechanics</p>
                </div>

                <div style={{width: '25%', backgroundColor: 'lime', margin: '10px', padding: '35px', borderRadius: '10px'}}>
                    <h2>{ratting.length/2}+</h2>
                    <p>Satisfied Customers</p>
                </div>
            </div>
        </div>


        <div style={{width: '100%', display: "flex", marginTop: '10px', textAlign: "center"}}>
            <div style={{width: '20%', backgroundColor: 'white',  margin: '10px'}}>
            </div>

            <div style={{width: '80%', backgroundColor: 'white',  margin: '10px', display: "flex", padding: '30px', justifyContent: "center"}}>
            </div>
        </div>
        
        </>
    
    );
};

export default Home;