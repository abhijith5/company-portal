import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { RiEditLine, RiGitRepositoryCommitsLine,RiDeleteBinLine } from "react-icons/ri";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    deleteBtn: {
        background: "red"
    }
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, 'Frozen yoghurt'),
    createData(2, 'Ice cream sandwich'),

];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Sl No</TableCell>
                        <TableCell align="left">Job Title</TableCell>
                        <TableCell>Actions</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row" width="1rem">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.calories}</TableCell>
                            <TableCell align="left">
                                <Button variant="contained" color="primary" style={{ marginRight: "1rem" }}>
                                    <RiEditLine fontSize="1.2rem" style={{ marginRight: "5px" }}></RiEditLine>Edit
                                </Button>
                                <Button variant="contained" color="secondary" style={{ marginRight: "1rem" }}>
                                    <RiGitRepositoryCommitsLine fontSize="1.2rem" style={{ marginRight: "5px" }}></RiGitRepositoryCommitsLine>Publish
                                </Button>
                                <Button variant="contained" className={classes.deleteBtn} color="secondary" style={{ marginRight: "1rem" }}>
                                    <RiDeleteBinLine fontSize="1.2rem" style={{ marginRight: "5px" }}></RiDeleteBinLine>
                                    Remove
                                </Button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
