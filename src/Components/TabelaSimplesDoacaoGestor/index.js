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
import { FaSistrix, FaArrowRight, FaCheck, FaPlus } from 'react-icons/fa';
import { hover, dark } from '../../styles/Paleta';

const useStyles = makeStyles({
    table: {
        minWidth: 300,
        maxWidth: 900,
        overflow: 'hidden',
    },
    centraliza: {
        textAlign: 'center',
    },
    svg: {
        display: 'flex',
        margin: 'auto',
        width: '30px',
        height: '20px',
        color: dark,
        '&:hover': {
            cursor: 'pointer',
            color: hover,
        },
    },
    svgRotacao: {
        transform: 'rotate(45deg)',
        display: 'flex',
        margin: 'auto',
        width: '30px',
        height: '20px',
        color: dark,
        '&:hover': {
            cursor: 'pointer',
            color: hover,
        },
    },
    svgNoHover: {
        display: 'flex',
        margin: 'auto',
        width: '30px',
        height: '20px',
        color: dark,
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
                        <TableCell className={classes.centraliza}>
                            Doando
                        </TableCell>
                        <TableCell className={classes.centraliza}> </TableCell>
                        <TableCell className={classes.centraliza}>
                            Recebendo
                        </TableCell>
                        <TableCell className={classes.centraliza}>
                            Valor Doado
                        </TableCell>
                        <TableCell className={classes.centraliza}>
                            Negar
                        </TableCell>
                        <TableCell className={classes.centraliza}>
                            Aceitar
                        </TableCell>
                        <TableCell className={classes.centraliza}>
                            Detalhes
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.idDoacao}>
                            <TableCell className={classes.centraliza}>
                                {row.nomeDoador}
                            </TableCell>
                            <TableCell className={classes.centraliza}>
                                <FaArrowRight className={classes.svgNoHover} />
                            </TableCell>
                            <TableCell className={classes.centraliza}>
                                {row.nomeRecebedor}
                            </TableCell>
                            <TableCell className={classes.centraliza}>
                                {row.valorDoado}
                            </TableCell>
                            <TableCell className={classes.centraliza}>
                                <Link
                                    to={`/ConfirmaNegarDoacao/${row.nomeDoador}/${row.nomeRecebedor}`}
                                >
                                    <FaPlus className={classes.svgRotacao} />
                                </Link>
                            </TableCell>
                            <TableCell className={classes.centraliza}>
                                <Link
                                    to={`/ConfirmaAceitarDoacao/${row.nomeDoador}/${row.nomeRecebedor}`}
                                >
                                    <FaCheck className={classes.svg} />
                                </Link>
                            </TableCell>
                            <TableCell className={classes.centraliza}>
                                <Link to={`/DetalhesDoacao/${row.idDoacao}`}>
                                    <FaSistrix className={classes.svg} />
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
