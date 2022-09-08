import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AlertDialog(props) {
  const [data, setData] = React.useState([])
  const Id = props.id;
  const serviceId = props.serviceId;
  const complainId = props.complainId;
  
  const [open, setOpen] = React.useState(false);


  const del = () =>{
    if(Id !== null){
      fetch(`http://localhost:3001/users1/${Id}`,{
        method: "delete",
        headers: {
            'Content-Type': "application/json",
        }
      })
      setOpen(false);
      window.location.reload(false)

  } 

  if(serviceId !== null){
    fetch(`http://localhost:3001/service1/${serviceId}`,{
        method: "delete",
        headers: {
            'Content-Type': "application/json",
        }
      })
      setOpen(false);
      window.location.reload(false)
  }


  if(complainId){
    fetch(`http://localhost:3001/complain1/${complainId}`,{
        method: "delete",
        headers: {
            'Content-Type': "application/json",
        }
      })
      setOpen(false);
      window.location.reload(false)
  }



}   
    


    

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <DeleteIcon onClick={handleClickOpen} style={{color: 'red'}} />
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure You Want to delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {complainId}{serviceId}{Id}
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button style={{backgroundColor: 'green', color: 'white'}} onClick={handleClose}>NO</Button>
          <Button onClick={del} style={{backgroundColor: 'red', color: 'white'}} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
