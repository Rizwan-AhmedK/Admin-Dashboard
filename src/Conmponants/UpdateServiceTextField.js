import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NavigationIcon from "@mui/icons-material/LocationOn"
import Select from '@mui/material/Select';
import { IconButton } from '@mui/material';

export default function UpdateServiceTextField() {

    const handleChange = (event) => {
        setAge(event.target.value);
      };

  const [age, setAge] = React.useState('');
    
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState(0)
    const [oldpass, setOldPass] = React.useState("")
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


        <TextField
          style={{width: '100%'}}
          id="outlined-helperText"
          label="Problem Statement"
          multiline={true}
          defaultValue="Default Value"
        />  

        <FormControl style={{width: "100%"}}  sx={{ m: 1}} size="small">
            <InputLabel id="demo-select-small">Service Type</InputLabel>
            <Select

                labelId="demo-select-small"
                id="demo-select-small"
                value="dsdsd"
                label="Role"
                onChange={handleChange}
            >
                <MenuItem value="">
                </MenuItem>
                <MenuItem value="ustaad">Ustaad</MenuItem>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="user">User</MenuItem>
            </Select>
        </FormControl>


        <TextField
          style={{width: '40%'}}
          id="outlined-helperText"
          label="langitude"
          defaultValue="Default Value"
        />
        
        <TextField
          style={{width: '40%'}}
          id="outlined-helperText"
          label="Latitude"
          defaultValue="Default Value"
        />

     <IconButton aria-label="delete">
        <NavigationIcon style={{margin: 14, color: 'blue'}} />
      </IconButton>

        <TextField
          style={{width: '100%'}}
          id="outlined-helperText"
          label="Address"
          defaultValue="Default Value"
        />

        <TextField
          style={{width: '100%'}}
          id="outlined-helperText"
          label="City"
          defaultValue="Default Value"
        />

        <TextField
          style={{width: '100%'}}
          id="outlined-helperText"
          label="Ustaad ID"
          defaultValue="Default Value"
        />

        <TextField
          style={{width: '100%'}}
          id="outlined-helperText"
          label="Payment"
          defaultValue="Default Value"
        />

      </div>
    </Box>
  );
}
