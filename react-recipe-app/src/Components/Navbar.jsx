import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, TextField, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [bgColor, setBgColor] = useState('#ffffff'); 
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSettingsClick = () => {

    setBgColor(bgColor === '#ffffff' ? '#f0f0f0' : '#ffffff');
    handleMenuClose(); 
  };

  return (
    <AppBar 
      position="fixed" 
      style={{ 
        backgroundColor: bgColor, 
        color: '#000000', 
        top: 0, 
        left: 0, 
        right: 0 
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" style={{ flexGrow: 1, cursor: 'pointer' }}>
          Recipe App
        </Typography>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search recipes..."
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          style={{ marginRight: '16px', width: '100px' }}
        />

        {/* User Menu */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleMenuClick}
          style={{ marginLeft: 'auto' }}
        >
          <AccountCircle />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
        >
          <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;



