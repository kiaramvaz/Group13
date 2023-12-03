import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PetProfile = ({ petData }) => {
    const { name, species, type, age, picture } = petData;

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
                    {petData.petName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Species: {species}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Type: {type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Age: {age} years
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PetProfile;