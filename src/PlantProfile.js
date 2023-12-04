import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PlantProfile = ({ plantData }) => {
  const { id, name, nickname, species, type, picture } = plantData;

  return (
    <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
      <CardMedia
                      component="img"
                      alt={name}
                      height="140"
                      image={picture}
                  />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {plantData.plantName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Common Name: {nickname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Species: {species}
        </Typography>
          <Typography variant="body2" color="text.secondary">
              Type: {type}
          </Typography>
      </CardContent>
    </Card>
  );
};

export default PlantProfile;
