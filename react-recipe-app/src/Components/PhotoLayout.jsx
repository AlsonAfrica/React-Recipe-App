import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import vegan from "../Image-Grid/Vegan.jpg";
import Meaty from "../Image-Grid/Meaty.jpg";
import Drink from "../Image-Grid/Drink.jpg";
import Appitizer from "../Image-Grid/Appitizer.jpg"

const PhotoLayout = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {/* Top Row */}
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardMedia
            component="img"
            image={vegan}
            alt="Image 1"
            sx={{ height: 300, objectFit: 'cover' }}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardMedia
            component="img"
            image={Meaty}
            alt="Image 2"
            sx={{ height: 300, objectFit: 'cover' }}
          />
        </Card>
      </Grid>
      {/* Bottom Row */}
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardMedia
            component="img"
            image={Drink}
            alt="Image 3"
            sx={{ height: 300, objectFit: 'cover' }}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardMedia
            component="img"
            image={Appitizer}
            alt="Image 4"
            sx={{ height: 300, objectFit: 'cover' }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default PhotoLayout;
