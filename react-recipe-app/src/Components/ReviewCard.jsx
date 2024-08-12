// src/components/ReviewCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { keyframes } from '@emotion/react';

// Define the left-to-right animation
const moveLeftToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const ReviewCard = ({ picture, name, comment }) => {
  return (
    <Card
      sx={{
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden',
        animation: `${moveLeftToRight} 10s linear infinite`,
        margin: '8px', // Optional: Add margin to space out cards
      }}
    >
      <CardMedia
        component="img"
        image={picture}
        alt={name}
        sx={{
          height: 200,
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;

