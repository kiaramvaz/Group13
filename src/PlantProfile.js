import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PlantProfile = ({ plantData }) => {
  const { name, type, age, picture } = plantData;

  return (
    <Card sx={{ minWidth: 275, margin: 'auto' }}>
      <CardMedia component="img" alt={name} height="140" width="140" image={picture} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type: {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {age}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlantProfile;
