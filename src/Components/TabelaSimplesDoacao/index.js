/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
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
import { hover, dark } from '../../styles/Paleta';

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
        color: dark,
        '&:hover': {
            cursor: 'pointer',
            color: hover,
        },
    },
    svgNoHover: {
        display: 'flex',
        margin: 'auto',
        width: '50px',
        height: '40px',
        color: dark,
    },
    aumentaNome: {
        width: '66%',
    },
});

export default function SimpleTable(props) {
    const rows = [];
    props.dados.map(item => rows.push(item));
    const classes = useStyles();
    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table
                className={classes.table}
                size="small"
                aria-label="simple table"
            >
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
                                <FaUserCircle className={classes.svgNoHover} />
                            </TableCell>
                            <TableCell className={classes.aumentaNome}>
                                {row.nome}
                            </TableCell>
                            <TableCell>
                                <Link
                                    to={`/Doacao/${row.idUsuario}/${row.nome}`}
                                >
                                    <AddIcon className={classes.svg} />
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
