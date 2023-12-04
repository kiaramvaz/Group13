import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Heading from './Heading.js';

import Typography from '@mui/material/Typography';

// Generate Order Data
/*function displayPet(id, name, species, type, age) {
    return { id, name, species, type, age};
}

const rows = [
    displayPet(0, 'Elvis', 'Maltipoo', 'Dog', 2),
    displayPet(1, 'Bella', 'Siamese', 'Cat', 4),
    displayPet(2, 'Charlie', 'Golden Retriever', 'Dog', 6),
    displayPet(3, 'Lucy', 'Persian', 'Cat', 9),
    displayPet(4, 'Max', 'Beagle', 'Dog', 13),
    displayPet(5, 'Luna', 'Ragdoll', 'Cat', 10),
];*/

const rows = [];
const storedPets = JSON.parse(localStorage.getItem('pets')) || [];

storedPets.forEach(storedPet => {
    rows.push(storedPet);
});

function preventDefault(event) {
    event.preventDefault();
}

export default function Pets() {
    return (
        <React.Fragment>
            <Typography component="div" variant="h6" sx={{ color: 'green', marginBottom: 2 }}>
                My Pets
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Species</TableCell>
                        <TableCell align="right">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="left">{row.petName}</TableCell>
                            <TableCell align="center">{`${row.species}`}</TableCell>
                            <TableCell align="right">{`${row.type}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}