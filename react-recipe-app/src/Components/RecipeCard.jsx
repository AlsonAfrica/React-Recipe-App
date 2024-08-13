import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, CardActions, Button, Box, TextField } from '@mui/material';
import FlipIcon from '@mui/icons-material/Flip';

const FlipCard = ({ data, onSave, onDelete }) => {
  const [flipped, setFlipped] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...data });

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setFormData({ ...data }); // Reset to original data
    setIsEditing(false);
  };

  const handleSave = () => {
    onSave(formData); // Call the save function passed from parent
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card
      sx={{
        width: 345,
        height: 'auto',
        marginTop: '100px',
        marginLeft: '17px',
        position: 'relative',
        boxShadow: 3,
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {data.image && (
        <CardMedia
          component="img"
          height="140"
          image={URL.createObjectURL(data.image)}
          alt="Recipe Image"
          sx={{
            objectFit: 'cover',
            width: '100%',
          }}
        />
      )}
      <CardContent
        sx={{
          flex: 1,
          maxHeight: '300px', // Fixed height for scrollable area
          overflowY: 'auto',  // Vertical scroll
          paddingBottom: '56px', // To accommodate buttons at the bottom
        }}
      >
        {isEditing ? (
          <>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ marginBottom: '8px' }}
            />
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              sx={{ marginBottom: '8px' }}
            />
            <TextField
              fullWidth
              label="Preparation Time"
              name="preparationTime"
              value={formData.preparationTime}
              onChange={handleChange}
              sx={{ marginBottom: '8px' }}
            />
            <TextField
              fullWidth
              label="Cooking Time"
              name="cookingTime"
              value={formData.cookingTime}
              onChange={handleChange}
              sx={{ marginBottom: '8px' }}
            />
            <TextField
              fullWidth
              label="Servings"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              sx={{ marginBottom: '8px' }}
            />
            {flipped ? (
              <>
                <TextField
                  fullWidth
                  label="Ingredients"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  sx={{ marginBottom: '8px' }}
                />
                <TextField
                  fullWidth
                  label="Instructions"
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  multiline
                  rows={4}
                />
              </>
            ) : null}
          </>
        ) : (
          <>
            {flipped ? (
              <>
                <Typography variant="h5" component="div">
                  Ingredients
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.ingredients}
                </Typography>
                <Typography variant="h5" component="div" sx={{ marginTop: '16px' }}>
                  Instructions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.instructions}
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Prep Time: {data.preparationTime} | Cooking Time: {data.cookingTime} | Servings: {data.servings}
                </Typography>
              </>
            )}
          </>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', padding: '16px', position: 'absolute', bottom: 0, width: '100%' }}>
        <Box>
          <IconButton onClick={handleFlip}>
            <FlipIcon />
          </IconButton>
        </Box>
        <Box>
          {isEditing ? (
            <>
              <Button variant="outlined" color="primary" onClick={handleSave} sx={{ marginRight: '8px' }}>
                Save
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCancelEdit}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button variant="outlined" color="primary" onClick={handleEdit} sx={{ marginRight: '8px' }}>
                Edit
              </Button>
              <Button variant="outlined" color="error" onClick={onDelete}>
                Delete
              </Button>
            </>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default FlipCard;
