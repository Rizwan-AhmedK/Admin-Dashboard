import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import Person3Icon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider';
import CachedIcon from "@mui/icons-material/Cached";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Button } from '@mui/material';



export default function InsetDividers() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem onClick={() => window.location.reload(false)}>
        <ListItemAvatar>
          <Avatar >
            <CachedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Reload Statistics"  />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonAddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Add New User" />
      </ListItem>

      {/* <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Person3Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Users Details" />
      </ListItem>

      
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ManageAccountsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mechanics Details" />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <NoteAltIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Complain Details" />
      </ListItem> */}
    </List>
  );
}
