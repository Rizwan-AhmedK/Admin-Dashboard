import * as React from 'react';
import Box from '@mui/material/Box';
import CameraIcon from '@mui/icons-material/Camera';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SelectSmall from "../Conmponants/DropDown"

export default function AddNewUser() {
    
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState(0)
    const [newPass, setNewPass] = React.useState("")
    const [reEnterPass, setReEnterPass] = React.useState("")
    const [data, setData] = React.useState([])

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          style={{width: '100%'}}
          id="outlined-helperText"
          label="Name"
          defaultValue="Default Value"
        />

        <TextField
          style={{width: '100%'}}
          id="outlined-helperText"
          label="Email"
          defaultValue="Default Value"
        />

        <TextField
          style={{width: '100%'}}
          id="outlined-helperText"
          label="Phone"
          defaultValue="Default Value"
        />  


        <SelectSmall />

        
        <TextField
          style={{width: '100%'}}
          id="outlined-helperText"
          label="Password"
          defaultValue="Default Value"
        />

        <TextField
          style={{width: '100%'}}
          id="outlined-helperText"
          label="Re enter Pass"
          defaultValue="Default Value"
        />

        <TextField
          style={{width: '100%'}}
          id="outlined-helperText"
          label="City"
          defaultValue="Default Value"
        />

      <Button style={{marginLeft: 10}} variant="contained" startIcon={<CameraIcon />}>
        Upload Cnic
      </Button>

      </div>
    </Box>
  );
}
