import React, { useState } from 'react';
import {
  Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Typography,
  useMediaQuery, useTheme, AppBar, Toolbar, TextField, Menu, MenuItem, Box, Collapse, Dialog, 
  DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem as SelectMenuItem, InputLabel, FormControl
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import AppetizerIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalBarIcon from '@mui/icons-material/LocalBar'; 
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add'; 
import { useNavigate } from 'react-router-dom'; 
import { GiCampCookingPot } from "react-icons/gi";

function Sidebar({ onFormSubmit }) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDinner, setOpenDinner] = useState(false);
  const [openLunch, setOpenLunch] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [recipeData, setRecipeData] = useState({
    name: '',
    category: '',
    ingredients: '',
    instructions: '',
    preparationTime: '',
    cookingTime: '',
    servings: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const navigate = useNavigate(); // Initialize useNavigate

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
    // Add your logout logic here (e.g., clearing tokens or user data)
    
    handleProfileClose();
    navigate('/'); // Redirect to home page
  };

  const handleDinnerClick = () => {
    setOpenDinner(!openDinner);
  };

  const handleLunchClick = () => {
    setOpenLunch(!openLunch);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setRecipeData({
      name: '',
      category: '',
      ingredients: '',
      instructions: '',
      preparationTime: '',
      cookingTime: '',
      servings: '',
      image: null
    });
    setImagePreview(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setRecipeData({ ...recipeData, image: file });
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onFormSubmit(recipeData); 
    handleDialogClose();
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
            <MenuItem onClick={() => { handleProfileClose();}}>Settings</MenuItem>
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
          <Typography variant="h6" component="div" style={{ padding: '16px', fontWeight: 'bold', color:'chocolate'}}>
            Yum Yard Recipe App <GiCampCookingPot />
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
          <ListItem button onClick={handleDialogOpen}>
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary="Add Recipe" />
          </ListItem>
        </List>
      </Drawer>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Add Recipe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            name="name"
            value={recipeData.name}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={recipeData.category}
              onChange={handleChange}
            >
              <SelectMenuItem value="Breakfast">Breakfast</SelectMenuItem>
              <SelectMenuItem value="Lunch">Lunch</SelectMenuItem>
              <SelectMenuItem value="Dinner">Dinner</SelectMenuItem>
              <SelectMenuItem value="Snack">Snack</SelectMenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Ingredients"
            type="text"
            fullWidth
            multiline
            rows={4}
            name="ingredients"
            value={recipeData.ingredients}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Instructions"
            type="text"
            fullWidth
            multiline
            rows={4}
            name="instructions"
            value={recipeData.instructions}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Preparation Time"
            type="text"
            fullWidth
            name="preparationTime"
            value={recipeData.preparationTime}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Cooking Time"
            type="text"
            fullWidth
            name="cookingTime"
            value={recipeData.cookingTime}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Servings"
            type="text"
            fullWidth
            name="servings"
            value={recipeData.servings}
            onChange={handleChange}
          />
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="image-upload">
            <Button variant="contained" component="span">
              Upload Image
            </Button>
          </label>
          {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100%', marginTop: '16px' }} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Sidebar;
