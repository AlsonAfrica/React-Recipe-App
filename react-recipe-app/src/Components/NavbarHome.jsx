import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme,
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Tab, Tabs, Divider, CircularProgress
} from '@mui/material';
import { keyframes } from '@emotion/react';
import { GiCampCookingPot } from "react-icons/gi";
import MenuIcon from '@mui/icons-material/Menu';
import { GiArchiveRegister } from "react-icons/gi";
import { SiGnuprivacyguard } from "react-icons/si";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
`;

function NavbarHome() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openTermsDialog, setOpenTermsDialog] = useState(false);
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  const [newColor, setNewColor] = useState('#ffffff');
  const [authTab, setAuthTab] = useState(0);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSettingsClick = () => {
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleColorChange = () => {
    setBgColor(newColor);
    setOpenDialog(false);
  };

  const handleTermsOpen = () => {
    setOpenTermsDialog(true);
    handleMenuClose();
  };

  const handleTermsClose = () => {
    setOpenTermsDialog(false);
  };

  const handleAuthOpen = () => {
    setOpenAuthDialog(true);
    handleMenuClose();
  };

  const handleAuthClose = () => {
    setOpenAuthDialog(false);
  };

  const handleAuthTabChange = (event, newValue) => {
    setAuthTab(newValue);
  };

  const handleRegister = async () => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await axios.post('http://localhost:5001/users', {
        username,
        email,
        password
      });
      
      setSuccessMessage('User registered successfully! Please login.');
      setAuthTab(0); // Switch to login tab
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('Failed to register user.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.get(`http://localhost:5001/users?username=${loginUsername}&password=${loginPassword}`);
      if (response.data.length > 0) {
        // Credentials are correct
        navigate('/LandingPage');
      } else {
        // Incorrect credentials
        setErrorMessage('Incorrect username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Failed to log in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
          <Typography variant="h6" component="div" style={{ flexGrow: 1, cursor: 'pointer' }}>
            <span className='logo'>YumYard <GiCampCookingPot /></span>
          </Typography>

          {isSmallScreen ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleMenuClick}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleAuthOpen}>Try Me</MenuItem>
                <MenuItem onClick={handleTermsOpen}>T & C's</MenuItem>
                <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: '16px' }}>
              <Button 
                color="inherit"
                sx={{ 
                  transition: 'background-color 0.3s ease, transform 0.3s ease', 
                  '&:hover': { 
                    backgroundColor: 'chocolate',
                    animation: `${bounce} 1s ease` 
                  } 
                }}
                onClick={handleAuthOpen}
              >
                Try Me!
              </Button>
              <Button 
                color="inherit"
                sx={{ 
                  transition: 'background-color 0.3s ease, transform 0.3s ease', 
                  '&:hover': { 
                    backgroundColor: 'chocolate',
                    animation: `${bounce} 1s ease` 
                  } 
                }}
                onClick={handleTermsOpen}
              >
                T & C's
              </Button>
              <Button 
                color="inherit"
                sx={{ 
                  transition: 'background-color 0.3s ease, transform 0.3s ease', 
                  '&:hover': { 
                    backgroundColor: 'chocolate',
                    animation: `${bounce} 1s ease` 
                  } 
                }}
                onClick={handleSettingsClick}
              >
                Settings
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Dialog for changing background color */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Change Background Color</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Background Color"
            type="color"
            fullWidth
            variant="standard"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleColorChange}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for terms and conditions */}
      <Dialog open={openTermsDialog} onClose={handleTermsClose}>
        <DialogTitle>Terms and Conditions</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
          <strong>1. Introduction</strong>
            <br />
            Welcome to YumYard! These Terms and Conditions govern your use of our website and services. By using YumYard, you agree to comply with and be bound by these terms. If you do not agree to these terms, please do not use our services.
            <br /><br />
            <strong>2. Privacy Policy</strong>
            <br />
            <strong>2.1. Information We Collect</strong>
            <br />
            We collect personal information that you voluntarily provide to us when you use our services, including but not limited to:
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Contact information</li>
              <li>Usage data</li>
            </ul>
            <strong>2.2. How We Use Your Information</strong>
            <br />
            We use your personal information to:
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate with you regarding updates, promotions, and feedback</li>
              <li>Ensure the security and integrity of our services</li>
            </ul>
            <strong>2.3. Data Security</strong>
            <br />
            We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            <br /><br />
            <strong>3. User Responsibilities</strong>
            <br />
            As a user of YumYard, you agree to:
            <ul>
              <li>Provide accurate and current information</li>
              <li>Not engage in any activities that could harm or disrupt our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
            <br />
            <strong>4. Limitation of Liability</strong>
            <br />
            To the extent permitted by law, YumYard shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
            <br /><br />
            <strong>5. Changes to Terms</strong>
            <br />
            We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting. Your continued use of our services after such changes constitutes your acceptance of the revised terms.
            <br /><br />
            <strong>6. Contact Us</strong>
            <br />
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at support@yumyard.com.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTermsClose}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for authentication */}
      <Dialog open={openAuthDialog} onClose={handleAuthClose} fullWidth maxWidth="sm">
        <DialogTitle>Authentication</DialogTitle>
        <DialogContent>
          <Tabs value={authTab} onChange={handleAuthTabChange} aria-label="authentication tabs">
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          {authTab === 0 ? (
            <Box sx={{ padding: 2 }}>
              <TextField
                autoFocus
                margin="dense"
                label="Username"
                type="text"
                fullWidth
                variant="standard"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              {loading && <CircularProgress />}
              {errorMessage && <Typography color="error">{errorMessage}</Typography>}
            </Box>
          ) : (
            <Box sx={{ padding: 2 }}>
              <TextField
                autoFocus
                margin="dense"
                label="Username"
                type="text"
                fullWidth
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {loading && <CircularProgress />}
              {successMessage && <Typography color="success">{successMessage}</Typography>}
              {errorMessage && <Typography color="error">{errorMessage}</Typography>}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAuthClose}>Close</Button>
          {authTab === 0 ? (
            <Button onClick={handleLogin}>Login</Button>
          ) : (
            <Button onClick={handleRegister}>Register</Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default NavbarHome;
