import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme,
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Tab, Tabs, Divider
} from '@mui/material';
import { keyframes } from '@emotion/react';
import { GiCampCookingPot } from "react-icons/gi";
import MenuIcon from '@mui/icons-material/Menu';
import { GiArchiveRegister } from "react-icons/gi";
import { SiGnuprivacyguard } from "react-icons/si";

// Define the bounce keyframe animation
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
  const [openAuthDialog, setOpenAuthDialog] = useState(false); // New state for auth dialog
  const [newColor, setNewColor] = useState('#ffffff');
  const [authTab, setAuthTab] = useState(0); // Tab state for auth dialog
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
                onClick={handleAuthOpen} // Updated button
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
            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            <br /><br />
            <strong>2.4. Sharing Your Information</strong>
            <br />
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to provide our services. We may share information with trusted partners who assist us in operating our website or conducting our business, provided those parties agree to keep this information confidential.
            <br /><br />
            <strong>2.5. Your Choices</strong>
            <br />
            You have the right to access, correct, or delete your personal information. You can request changes to your data by contacting us at [your contact email].
            <br /><br />
            <strong>2.6. Cookies and Tracking Technologies</strong>
            <br />
            We use cookies and similar tracking technologies to enhance your user experience. Cookies are small files that are stored on your device. You can set your browser to refuse cookies or to alert you when cookies are being sent. However, some parts of our website may not function properly if you disable cookies.
            <br /><br />
            <strong>2.7. Changes to This Policy</strong>
            <br />
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website. Your continued use of our services after such changes constitutes your acceptance of the updated policy.
            <br /><br />
            <strong>3. Contact Us</strong>
            <br />
            If you have any questions or concerns about our Terms and Conditions or Privacy Policy, please contact us at [your contact email].
            <br /><br />
            <strong>4. Governing Law</strong>
            <br />
            These Terms and Conditions are governed by and construed in accordance with the laws of [your jurisdiction]. Any disputes arising from these terms shall be resolved in the courts of [your jurisdiction].
            <br /><br />
            <strong>5. Effective Date</strong>
            <br />
            These Terms and Conditions are effective as of [12/08/2024].
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTermsClose}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for registration and login */}
      <Dialog open={openAuthDialog} onClose={handleAuthClose} fullWidth maxWidth="sm">
        <DialogTitle>Jump In</DialogTitle>
        <Tabs value={authTab} onChange={handleAuthTabChange} aria-label="authentication tabs">
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        <Divider />
        <DialogContent>
          {authTab === 0 && (
            <>
              <Typography variant="h6">Login <SiGnuprivacyguard /></Typography>
              <TextField
                margin="dense"
                label="Username"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
              />
            </>
          )}
          {authTab === 1 && (
            <>
              <Typography variant="h6">Register <GiArchiveRegister /></Typography>
              <TextField
                margin="dense"
                label="Username"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAuthClose}>Close</Button>
          <Button onClick={() => { /* Handle form submission */ }}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default NavbarHome;


