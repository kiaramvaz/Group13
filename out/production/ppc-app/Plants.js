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
function createData(id, species, type) {
    return { id, species, type};
}

const rows = [
    createData(0, 'Monstera Deliciosa', 'Indoor'),
    createData(1, 'Snake Plant', 'Indoor'),
    createData(2, 'Fiddle Leaf Fig', 'Indoor'),
    createData(3, 'Succulent', 'Indoor'),
    createData(4, 'Lavender', 'Outdoor'),
    createData(5, 'Rose Bush', 'Outdoor'),
];

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
                        <TableCell align="left">Species</TableCell>
                        <TableCell align="left">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="left">{row.species}</TableCell>
                            <TableCell align="left">{`${row.type}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}