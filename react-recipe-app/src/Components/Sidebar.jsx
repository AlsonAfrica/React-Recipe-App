import React, { useState } from 'react';
import {
  Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Typography,
  useMediaQuery, useTheme, AppBar, Toolbar, TextField, Menu, MenuItem, Box, Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import AppetizerIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalBarIcon from '@mui/icons-material/LocalBar'; // Import LocalBarIcon for Beverages
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add'; // Import AddIcon for the floating button

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDinner, setOpenDinner] = useState(false);
  const [openLunch, setOpenLunch] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Handle logout logic here
    handleProfileClose();
  };

  const handleDinnerClick = () => {
    setOpenDinner(!openDinner);
  };

  const handleLunchClick = () => {
    setOpenLunch(!openLunch);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#ffffff',
          color: '#000000',
          display: 'flex',
          padding: '0 16px',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          {isSmallScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Recipe App */}
          </Typography>
          {isSmallScreen ? (
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Search..."
                size="small"
                InputProps={{
                  startAdornment: <SearchIcon />,
                }}
                sx={{ maxWidth: '300px', width: '100%' }}
              />
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1 }} />
          )}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="profile"
            onClick={handleProfileClick}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileClose}
          >
            <MenuItem onClick={() => { handleProfileClose(); /* Open settings dialog */ }}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: '240px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '240px',
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" style={{ padding: '16px', fontWeight: 'bold' }}>
            Recipe App
          </Typography>
        </Toolbar>
        <Divider />
        <TextField
          variant="outlined"
          placeholder="Search..."
          fullWidth
          sx={{ margin: '16px', display: isSmallScreen ? 'none' : 'block' }}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        />
        <List>
          <ListItem button>
            <ListItemIcon><BookIcon /></ListItemIcon>
            <ListItemText primary="Recipes" />
          </ListItem>
          <ListItem button onClick={handleDinnerClick}>
            <ListItemIcon><DinnerDiningIcon /></ListItemIcon>
            <ListItemText primary="Dinner" />
            {openDinner ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDinner} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Dessert" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Main Course" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleLunchClick}>
            <ListItemIcon><LunchDiningIcon /></ListItemIcon>
            <ListItemText primary="Lunch" />
            {openLunch ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openLunch} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Dessert" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Main Course" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon><AlarmOnIcon /></ListItemIcon>
            <ListItemText primary="Breakfast" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AppetizerIcon /></ListItemIcon>
            <ListItemText primary="Appetizers" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><LocalBarIcon /></ListItemIcon> {/* Add Beverages icon */}
            <ListItemText primary="Beverages" />
          </ListItem>
        </List>
      </Drawer>

      {/* Floating Action Button */}
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: theme.palette.primary.main,
          color: '#ffffff',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <AddIcon />
      </IconButton>
    </>
  );
}

export default Sidebar;
