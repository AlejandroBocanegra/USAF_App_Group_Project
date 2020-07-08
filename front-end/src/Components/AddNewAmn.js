import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Typography, Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
            display: 'flex',
            flexWrap: 'wrap',
        }},
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
            height: '10ch',
        },
    }));

const AddNewAmn = () => {

    const [checked, setChecked] = React.useState(true);

        const handleChange = (event) => {
          setChecked(event.target.checked);
        };

    const classes = useStyles();

    const [addAmn, setAddAmn] = useState();

    const onSubmitForm = async (event) => {
        event.preventDefault();

        try {
            const body = { addAmn };
            const response = await fetch("http://localhost:9001/create/in_proc_amn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize={52} m={1}>
                    Add A New Airman
                    </Box>
            </Typography>
            <form>
                <div>
                    <TextField
                        label="First Name"
                        variant="filled"
                        className={classes.textField}
                        value={addAmn}
                        onChange={event => setAddAmn (event.target.value)}
                    />
                    <TextField
                        label="Middle Initial"
                        variant="filled"
                        className={classes.textField}
                    />
                    <TextField
                        label="Last Name"
                        variant="filled"
                        className={classes.textField}
                    />
                    <TextField
                        label="Rank"
                        variant="filled"
                        className={classes.textField}
                    />
                    <TextField
                        label="Squadron"
                        variant="filled"
                        className={classes.textField}
                    />
                    <TextField
                        label="Flight"
                        variant="filled"
                        className={classes.textField}
                    />
                    <TextField
                        label="Office Symbol"
                        variant="filled"
                        className={classes.textField}
                    />
                    <TextField
                        label="Date of Arrival (DOA)"
                        variant="filled"
                        type="date"
                        InputLabelProps={{ shrink: true,}}
                        className={classes.textField}
                    />
                    <TextField
                        label="Drivers License"
                        variant="filled"
                        type="checkbox"
                        InputLabelProps={{ shrink: true,}}
                        className={classes.textField} >
                        <Checkbox 
                            checked={checked}
                            onChange={handleChange}
                        />
                        </TextField>
                    <TextField
                        label="Stationed Overseas"
                        variant="filled"
                        type="checkbox"
                        InputLabelProps={{ shrink: true,}}
                        className={classes.textField}>
                         <Checkbox 
                            checked={checked}
                            onChange={handleChange}/>
                        </TextField>
                    <TextField
                        label="Tempo Band"
                        variant="filled"
                        className={classes.textField}
                    />
                    <TextField
                        label="Vulnerability Window"
                        variant="filled"
                        type="date"
                        InputLabelProps={{ shrink: true,}}
                        className={classes.textField}
                    />
                    <TextField
                        label="Next PCS"
                        variant="filled"
                        type="date"
                        InputLabelProps={{ shrink: true,}}
                        className={classes.textField}
                    />
                </div>
                <Button className="AddAnAmn" variant="contained" color="primary"> Submit New Airman </Button>
            </form>
        </Fragment>
    )
};

export default AddNewAmn;