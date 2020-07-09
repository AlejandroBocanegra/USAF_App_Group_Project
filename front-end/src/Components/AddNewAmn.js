import React, { Fragment } from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//Material UI
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
            display: 'flex',
            flexWrap: 'wrap',
        }
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
        height: '10ch',
    },
}));
//End Material UI

const AddNewAmn = () => {
    //Material UI
    const classes = useStyles();
    //End Material UI
    
    //Form Submittion, submission? google it yourself... submit-tion?
    const onSubmitForm = async event3 => {
        event3.preventDefault();
        try {
            const body = {
                amn_f_name: document.getElementById ('amn_f_name').value,
                amn_m_i: document.getElementById ('amn_m_i').value,
                amn_l_name: document.getElementById ('amn_l_name').value,
                amn_rank: document.getElementById ('amn_rank').value,
                amn_sq: document.getElementById ('amn_sq').value,
                amn_flt: document.getElementById ('amn_flt').value,
                amn_office: document.getElementById ('amn_office').value,
                amn_d_o_a: document.getElementById ('amn_d_o_a').value,
                amn_d_licns: document.getElementById ('amn_d_licns').value,
                amn_o_s: document.getElementById ('amn_o_s').value,
                sqd_tempo_band: document.getElementById ('sqd_tempo_band').value,
                sqd_vulner_window: document.getElementById ('sqd_vulner_window').value,
                sqd_next_p_c_s: document.getElementById ('sqd_next_p_c_s').value,
            };
console.log(body);
            const response = await fetch("http://localhost:9001/create/in_proc_amn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }                 
);
console.log (response);

            window.location = "/";
            
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <CssBaseline>
                <Typography component="div">
                    <Box
                        fontFamily="Monospace"
                        fontSize={52}
                        m = { 1 } >
                        Add A New Airman
                    </Box>
                </Typography>
                <form
                    onSubmit={onSubmitForm}
                >
                    <div>
                        <TextField
                            id="amn_f_name"
                            label="First Name"
                            variant="filled"
                            className={classes.textField}
                        />

                        <TextField
                            id="amn_m_i"
                            label="Middle Initial"
                            variant="filled"
                            className={classes.textField}
                        />

                        <TextField
                            id="amn_l_name"
                            label="Last Name"
                            variant="filled"
                            className={classes.textField}  
                        />

                        <TextField
                            id="amn_rank"
                            label="Rank"
                            variant="filled"
                            className={classes.textField}
                        />

                        <TextField
                            id="amn_sq"
                            label="Squadron"
                            variant="filled"
                            className={classes.textField}
                        />

                        <TextField
                            id="amn_flt"
                            label="Flight"
                            variant="filled"
                            className={classes.textField}
                        />

                        <TextField
                            id="amn_office"
                            label="Office Symbol"
                            variant="filled"
                            className={classes.textField}
                        />

                        <TextField
                            id="amn_d_o_a"
                            label="Date of Arrival (DOA)"
                            variant="filled"
                            type="date"
                            InputLabelProps={{ shrink: true, }}
                            className={classes.textField}
                        />

                        <TextField
                            id="amn_d_licns"
                            name="drivers_license"
                            label="Drivers License"
                            variant="filled"
                            defaultValue="Yes or No"
                            className={classes.textField}
                        />

                        <TextField
                            id="amn_o_s"
                            label="Stationed Overseas"
                            variant="filled"
                            defaultValue="Yes or No"
                            className={classes.textField}
                        />

                        <TextField
                            id="sqd_tempo_band"
                            label="Tempo Band"
                            variant="filled"
                            className={classes.textField}

                        />

                        <TextField
                            id="sqd_vulner_window"
                            label="Vulnerability Window"
                            variant="filled"
                            type="date"
                            InputLabelProps={{ shrink: true, }}
                            className={classes.textField}
                        />

                        <TextField
                            id="sqd_next_p_c_s"
                            label="Next PCS"
                            variant="filled"
                            type="date"
                            InputLabelProps={{ shrink: true, }}
                            className={classes.textField}
                        />

                    </div>
                    <Button
                        className="AddAnAmn"
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick = { onSubmitForm }>
                        Submit New Airman
                </Button>
                </form>
            </CssBaseline>
        </Fragment>
    )
};

export default AddNewAmn;