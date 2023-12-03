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
/*function displayPlant(id, name, nickname, species, type) {
    return { id, name, nickname, species, type};
}

const rows = [
    displayPlant(0, 'Monstera Deliciosa 1', 'Monstera Deliciosa', 'Monstera Deliciosa', 'Indoor'),
    displayPlant(1, 'Snake Plant 1', 'Snake Plant', 'Dracaena trifasciata', 'Indoor'),
    displayPlant(2, 'Reggie', 'Fiddle Leaf Fig', 'Ficus lyrata', 'Indoor'),
    displayPlant(3, 'Soos', 'Foxtail Agave', 'Agave attenuata', 'Indoor'),
    displayPlant(4, 'Lavender Bush 2', 'Lavender', 'Lavandula angustifolia', 'Outdoor'),
    displayPlant(5, 'Rosie', 'Red Rose', 'Cinnamomea', 'Outdoor'),
];*/

const rows = [];
const storedPlants = JSON.parse(localStorage.getItem('plants')) || [];

storedPlants.forEach(storedPlant => {
    rows.push(storedPlant);
});

function preventDefault(event) {
    event.preventDefault();
}

export default function Plants() {
    return (
        <React.Fragment>
            <Typography component="div" variant="h6" sx={{ color: 'green', marginBottom: 2 }}>
                My Plants
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Common Name</TableCell>
                        <TableCell align="right">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="left">{row.plantName}</TableCell>
                            <TableCell align="center">{`${row.nickname}`}</TableCell>
                            <TableCell align="right">{`${row.type}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}