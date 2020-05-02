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
                            Nome
                        </TableCell>
                        <TableCell className={classes.centraliza}>
                            Perfil
                        </TableCell>
                        <TableCell className={classes.centraliza}>
                            Deletar
                        </TableCell>
                        <TableCell className={classes.centraliza}>
                            Detalhes
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.idUsuario}>
                            <TableCell className={classes.centraliza}>
                                {row.nome}
                            </TableCell>
                            <TableCell className={classes.centraliza}>
                                {row.perfil}
                            </TableCell>
                            <TableCell className={classes.centraliza}>
                                <Link
                                    to={`/ConfirmaDeletarUsuario/${row.idUsuario}/${row.nome}`}
                                >
                                    <FaPlus className={classes.svgRotacao} />
                                </Link>
                            </TableCell>
                            <TableCell className={classes.centraliza}>
                                <Link
                                    to={`/DescriçaoColaborador/${row.idUsuario}`}
                                >
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
