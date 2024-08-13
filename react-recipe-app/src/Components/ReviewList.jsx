// src/components/ReviewList.js
import React from 'react';
import ReviewCard from './ReviewCard';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
// import Veronica from "../Review-images/Veronica.jpg";
import Kamo from "../Review-images/Kamo.jpg"
import Nancy from "../Review-images/Nancy.jpg";
import Chris from "../Review-images/Chris.jpg";
import Neo from "../Review-images/Neo.jpg";
import Jane from "../Review-images/Jane.jpg"

const reviews = [
  {
    picture: Kamo,
    name: 'Kamo Mokoena',
    comment: 'Great product! Really loved it.',
  },
  {
    picture: Nancy,
    name: 'Nancy Smith',
    comment: 'Good value for the price.',
  },
  {
    picture: Jane,
    name: 'Jane Johnson',
    comment: 'The quality is top-notch!',
  },
  {
    picture: Neo,
    name: 'Michael Brown',
    comment: 'Not what I expected, but still okay.',
  },
];

const ReviewList = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Change 'sm' to 'md' if needed

  return (
    <Grid container spacing={2} justifyContent="center">
      {reviews.map((review, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <ReviewCard
            picture={review.picture}
            name={review.name}
            comment={review.comment}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReviewList;
