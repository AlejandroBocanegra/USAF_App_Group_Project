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
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> Airman ID </TableCell>
                            <TableCell> First Name </TableCell>
                            <TableCell> Middle Initial </TableCell>
                            <TableCell> Last Name </TableCell>
                            <TableCell> Rank </TableCell>
                            <TableCell> Squadron </TableCell>
                            <TableCell> Flight </TableCell>
                            <TableCell> Office Symbol </TableCell>
                            <TableCell> Date of Arrival (DOA) </TableCell>
                            <TableCell> Has a Drivers License </TableCell>
                            <TableCell> Is Stationed Overseas </TableCell>
                            <TableCell> Squadron ID </TableCell>
                            <TableCell> Has In-processed with CSS </TableCell>
                            <TableCell> Assigned Tempo Band </TableCell>
                            <TableCell> Next Vulnerability Window </TableCell>
                            <TableCell> Date Eligable to PCS </TableCell>
                            <TableCell> Squadron Airman ID </TableCell>
                            <TableCell> Base ID </TableCell>
                            <TableCell> Has In-processed with MPF </TableCell>
                            <TableCell> Has Attended New Commers Brief </TableCell>
                            <TableCell> Has Attended Diving Brief </TableCell>
                            <TableCell> Has Attended Foreign County Law Brief </TableCell>
                            <TableCell> Has Obtained Correct Network Rights </TableCell>
                            <TableCell> Base Airman ID </TableCell>
                            <TableCell> Edit Airman </TableCell>
                            <TableCell> Airman Has PCSd/PCAd Away </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {amn.map (amn => (
                            <TableRow>
                                <TableCell> {amn.amn_id} </TableCell>
                                <TableCell> {amn.first_name} </TableCell>
                                <TableCell> {amn.mi} </TableCell>
                                <TableCell> {amn.last_name} </TableCell>
                                <TableCell> {amn.rank} </TableCell>
                                <TableCell> {amn.squadron} </TableCell>
                                <TableCell> {amn.flight} </TableCell>
                                <TableCell> {amn.office_symbol} </TableCell>
                                <TableCell> {amn.date_of_arrival} </TableCell>
                                <TableCell> {amn.drivers_license} </TableCell>
                                <TableCell> {amn.overseas} </TableCell>
                                <TableCell> {amn.squadron_ID} </TableCell>
                                <TableCell> {amn.css} </TableCell>
                                <TableCell> {amn.tempo_band} </TableCell>
                                <TableCell> {amn.vulnerability_window} </TableCell>
                                <TableCell> {amn.eligable_to_pcs} </TableCell>
                                <TableCell> {amn.squadron_amn_id} </TableCell>
                                <TableCell> {amn.base_id} </TableCell>
                                <TableCell> {amn.mpf} </TableCell>
                                <TableCell> {amn.new_commers_brief} </TableCell>
                                <TableCell> {amn.diving_brief} </TableCell>
                                <TableCell> {amn.foreign_county_law_brief} </TableCell>
                                <TableCell> {amn.network_rights} </TableCell>
                                <TableCell> {amn.base_amn_id} </TableCell>
                                <TableCell> 
                                    <Button variant="contained" color="primary">
                                    Edit </Button>
                                </TableCell>
                                <TableCell> 
                                    <Button variant="contained" color="secondary">
                                    Delete </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
};

export default ViewAmn;