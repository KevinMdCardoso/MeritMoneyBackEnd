import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import { FaUserCircle } from 'react-icons/fa';

const useStyles = makeStyles({
    table: {
        minWidth: 300,
        maxWidth: 700,
    },
    centraliza: {
        textAlign: 'center',
    },
    svg: {
        display: 'flex',
        margin: 'auto',
        width: '50px',
        height: '40px',
    },
    aumentaNome: {
        width: '66%',
    },
});

function createData(idUsuario, nome) {
    return { idUsuario, nome };
}

const rows = [
    createData(1, 'Kevin Machado Cardoso'),
    createData(2, 'Jader Rampa'),
    createData(3, 'Sergio Velhaço'),
    createData(4, 'Guilherme Careca'),
    createData(5, 'Vitor guaselli'),
    createData(6, ' wgtw4eg w e gwegewgfgbfnghnm'),
    createData(7, 'gewegewgewg eg ewgewg e'),
    createData(8, 'fewf ew ew ewewge'),
    createData(9, 'testette tretet'),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell> </TableCell>
                        <TableCell className={classes.aumentaNome}>
                            Nome
                        </TableCell>
                        <TableCell className={classes.centraliza}>
                            Doar
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.idUsuario}>
                            <TableCell>
                                <FaUserCircle className={classes.svg} />
                            </TableCell>
                            <TableCell className={classes.aumentaNome}>
                                {row.nome}
                            </TableCell>
                            <TableCell>
                                <AddIcon className={classes.svg} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
