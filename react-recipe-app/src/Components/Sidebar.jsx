import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import AppetizerIcon from '@mui/icons-material/StarBorder';

function Sidebar() {
  return (
    <div style={{
      width: '240px',
      backgroundColor: '#f5f5f5',
      borderRight: '1px solid #e0e0e0',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography variant="h6" component="div" style={{ padding: '16px', fontWeight: 'bold' }}>
        Recipe App
      </Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><BookIcon /></ListItemIcon>
          <ListItemText primary="Recipes" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><DinnerDiningIcon /></ListItemIcon>
          <ListItemText primary="Dinner" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><LunchDiningIcon /></ListItemIcon>
          <ListItemText primary="Lunch" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AlarmOnIcon /></ListItemIcon>
          <ListItemText primary="Breakfast" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AppetizerIcon /></ListItemIcon>
          <ListItemText primary="Appetizers" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
