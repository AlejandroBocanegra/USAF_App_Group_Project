import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

//Material UI
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
//   const StyledTableRow = withStyles((theme) => ({
//     root: {
//       '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//       },
//     },
//   }))(TableRow);
//End Material UI

const ViewAmn = () => {
    //Material UI
    const classes = useStyles();
    //End Material UI

    const [ amn, setAmn ] = useState([]);

    const getAmn = async() => {
        try{

            const response = await fetch ("http://localhost:9001/viewAmn/all");
            const amnJsonData = await response.json();

            setAmn(amnJsonData);

        } catch (err) {
            console.log (err.message)
        }
    };

    useEffect (
        () => {
        getAmn();
    },[],);

    return (
        <Fragment>
        <td>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell> Airman ID </StyledTableCell>
                            <StyledTableCell> First Name </StyledTableCell>
                            <StyledTableCell> Middle Initial </StyledTableCell>
                            <StyledTableCell> Last Name </StyledTableCell>
                            <StyledTableCell> Rank </StyledTableCell>
                            <StyledTableCell> Squadron </StyledTableCell>
                            <StyledTableCell> Flight </StyledTableCell>
                            <StyledTableCell> Office Symbol </StyledTableCell>
                            <StyledTableCell> Date of Arrival (DOA) </StyledTableCell>
                            <StyledTableCell> Has a Drivers License </StyledTableCell>
                            <StyledTableCell> Is Stationed Overseas </StyledTableCell>
                            <StyledTableCell> Squadron ID </StyledTableCell>
                            <StyledTableCell> Has In-processed with CSS </StyledTableCell>
                            <StyledTableCell> Assigned Tempo Band </StyledTableCell>
                            <StyledTableCell> Next Vulnerability Window </StyledTableCell>
                            <StyledTableCell> Date Eligable to PCS </StyledTableCell>
                            <StyledTableCell> Squadron Airman ID </StyledTableCell>
                            <StyledTableCell> Base ID </StyledTableCell>
                            <StyledTableCell> Has In-processed with MPF </StyledTableCell>
                            <StyledTableCell> Has Attended New Commers Brief </StyledTableCell>
                            <StyledTableCell> Has Attended Diving Brief </StyledTableCell>
                            <StyledTableCell> Has Attended Foreign County Law Brief </StyledTableCell>
                            <StyledTableCell> Has Obtained Correct Network Rights </StyledTableCell>
                            <StyledTableCell> Base Airman ID </StyledTableCell>
                            <StyledTableCell> Edit Airman </StyledTableCell>
                            <StyledTableCell> Airman Has PCSd/PCAd Away </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {amn.map (amn => (
                            <TableRow>
                                <StyledTableCell> {amn.amn_id} </StyledTableCell>
                                <StyledTableCell> {amn.first_name} </StyledTableCell>
                                <StyledTableCell> {amn.mi} </StyledTableCell>
                                <StyledTableCell> {amn.last_name} </StyledTableCell>
                                <StyledTableCell> {amn.rank} </StyledTableCell>
                                <StyledTableCell> {amn.squadron} </StyledTableCell>
                                <StyledTableCell> {amn.flight} </StyledTableCell>
                                <StyledTableCell> {amn.office_symbol} </StyledTableCell>
                                <StyledTableCell> {amn.date_of_arrival} </StyledTableCell>
                                <StyledTableCell> {amn.drivers_license} </StyledTableCell>
                                <StyledTableCell> {amn.overseas} </StyledTableCell>
                                <StyledTableCell> {amn.squadron_ID} </StyledTableCell>
                                <StyledTableCell> {amn.css} </StyledTableCell>
                                <StyledTableCell> {amn.tempo_band} </StyledTableCell>
                                <StyledTableCell> {amn.vulnerability_window} </StyledTableCell>
                                <StyledTableCell> {amn.eligable_to_pcs} </StyledTableCell>
                                <StyledTableCell> {amn.squadron_amn_id} </StyledTableCell>
                                <StyledTableCell> {amn.base_id} </StyledTableCell>
                                <StyledTableCell> {amn.mpf} </StyledTableCell>
                                <StyledTableCell> {amn.new_commers_brief} </StyledTableCell>
                                <StyledTableCell> {amn.diving_brief} </StyledTableCell>
                                <StyledTableCell> {amn.foreign_county_law_brief} </StyledTableCell>
                                <StyledTableCell> {amn.network_rights} </StyledTableCell>
                                <StyledTableCell> {amn.base_amn_id} </StyledTableCell>
                                <StyledTableCell> 
                                    <Button variant="contained" color="primary">
                                    Edit </Button>
                                </StyledTableCell>
                                <StyledTableCell> 
                                    <Button variant="contained" color="secondary">
                                    Delete </Button>
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </td>
        </Fragment>
    );
};

export default ViewAmn;