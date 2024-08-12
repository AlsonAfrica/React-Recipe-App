import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardMedia, IconButton, Box } from '@mui/material';
import { Flip } from '@mui/icons-material';

function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Box
      sx={{
        perspective: '1000px',
        width: 300,
        height: 400,
        position: 'relative',
        margin: 'auto',
      }}
    >
      <Box
        sx={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        {/* Front Side */}
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            alt="Recipe"
            height="200"
            image="https://via.placeholder.com/300"
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography variant="h6">Recipe Name</Typography>
            <Typography variant="body2">Preparation Time: 20 min</Typography>
            <Typography variant="body2">Cooking Time: 40 min</Typography>
            <Typography variant="body2">Servings: 4</Typography>
            <Button variant="contained" color="primary" onClick={handleFlip} sx={{ marginTop: 2 }}>
              View
            </Button>
            <Button variant="outlined" color="error" sx={{ marginTop: 2 }}>
              Delete
            </Button>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>Ingredients</Typography>
            <Typography variant="body2">- Ingredient 1</Typography>
            <Typography variant="body2">- Ingredient 2</Typography>
            <Typography variant="body2">- Ingredient 3</Typography>
            <Typography variant="h6" gutterBottom>Instructions</Typography>
            <Typography variant="body2">1. Step 1</Typography>
            <Typography variant="body2">2. Step 2</Typography>
            <Typography variant="body2">3. Step 3</Typography>
            <Button variant="contained" color="primary" onClick={handleFlip} sx={{ marginTop: 2 }}>
              Back
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default FlipCard;



