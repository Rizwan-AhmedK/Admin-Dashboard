import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import UpdateServiceTextField from "../Conmponants/UpdateServiceTextField";
import UserTextField from './UserTextField';
import AddNewUser from "../Conmponants/AddNewUser"
import { Link } from 'react-router-dom';


export default function EditDialougue(props) {
  const [data, setData] = React.useState([])
  const userData = props.userData;
  const serviceData = props.serviceData;
  const Data = props.Data;

  
  const [open, setOpen] = React.useState(false);


  let Conmponant = null;

  if(userData){
    Conmponant = <UserTextField userData={[userData]}/>;
  }

  if(serviceData){
    Conmponant = <UpdateServiceTextField serviceData={[serviceData]}/>;

  }

  if(Data){
    Conmponant = <AddNewUser />;

  }

//   const del = () =>{
//     if(Id !== null){
//       fetch(`http://localhost:3001/users1/${Id}`,{
//         method: "delete",
//         headers: {
//             'Content-Type': "application/json",
//         }
//       })
//       setOpen(false);
//       window.location.reload(false)

//   } 

//   if(serviceId !== null){
//     fetch(`http://localhost:3001/service1/${serviceId}`,{
//         method: "delete",
//         headers: {
//             'Content-Type': "application/json",
//         }
//       })
//       setOpen(false);
//       window.location.reload(false)
//   }


//   if(complainId !== null){
//     fetch(`http://localhost:3001/complain1/${complainId}`,{
//         method: "delete",
//         headers: {
//             'Content-Type': "application/json",
//         }
//       })
//       setOpen(false);
//       window.location.reload(false)
//   }



// }   
    


    

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <EditIcon onClick={handleClickOpen} style={{color: 'blue'}} />
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Enter the following Details to Update"}
        </DialogTitle>
        <DialogContent>
{Conmponant}
        </DialogContent>
        <DialogActions>
          <Button style={{backgroundColor: 'red', color: 'white'}} onClick={handleClose}>Cancel</Button>
          <Button style={{backgroundColor: 'green', color: 'white'}} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
