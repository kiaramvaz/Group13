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
function createData(id, name, species) {
    return { id, name, species};
}

const rows = [
    createData(0, 'Elvis', 'Dog - Maltipoo'),
    createData(1, 'Bella', 'Cat - Siamese'),
    createData(2, 'Charlie', 'Dog - Golden Retriever'),
    createData(3, 'Lucy', 'Cat - Persian'),
    createData(4, 'Max', 'Dog - Beagle'),
    createData(5, 'Luna', 'Cat - Ragdoll'),
];

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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="center">{`${row.species}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}