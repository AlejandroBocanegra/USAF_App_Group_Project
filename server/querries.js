//Loads those things its dependent on
const Pool = require('PG').Pool;


const pool = new Pool({
    user: "usaf_user",
    password: "usafisthebest",
    host: "localhost",
    port: 5432,
    database: "usaf_app_group_project"
});


//ROUTES

//Create a new Amn POST
const addAmn = (req, res) => {
    let type = req.params.type;

    switch (type) {

        case "in_proc_amn":
//The values the Amn table is looking for
            let values = [
                req.body.amn_f_name,
                req.body.amn_m_i,
                req.body.amn_l_name,
                req.body.amn_rank,
                req.body.amn_sq,
                req.body.amn_flt,
                req.body.amn_office,
                req.body.amn_d_o_a,
                req.body.amn_d_licns,
                req.body.amn_o_s,
            ]
//Asks for the Amn info
            pool.query(
                `INSERT INTO amn
                (
                    amn_f_name,
                    amn_m_i,
                    amn_l_name,
                    amn_rank,
                    amn_sq, amn_flt,
                    amn_office,
                    amn_d_o_a,
                    amn_d_licns,
                    amn_o_s
                )
                VALUES 
                ( 
                    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
                )
                RETURNING amn_id;`,
                values,
                (error, result) => {
                    if (error) {
                        console.log(error);
                        res.status(500).send(JSON.stringify(
                            `This request has broken the server, please try again`
                        ))
                    } else {
//Sets the defualt values for the base table
                        let amn_id = result.rows[0].amn_id
                        values = [
                            false,
                            false,
                            false,
                            false,
                            false,
                            amn_id
                        ]
//Asks for the base table
                        pool.query(
                            `INSERT INTO base
                            (
                                base_m_p_f,
                                base_new_come_brief,
                                base_d_licns_brief,
                                base_law_brief,
                                base_ntwrk_rites,
                                base_amn_id
                            )
                            VALUES
                            (
                                $1, $2, $3, $4, $5, $6
                            )`,
                            values,
                            (error, result) => {
                                if (error) {
                                    console.log(error);
                                }
                            }
                        )
//Sets the default values for the sqd table
                        values = [
                            false,
                            req.body.sqd_tempo_band,
                            req.body.sqd_vulner_window,
                            req.body.sqd_next_p_c_s, amn_id
                        ]
//Asks for the squadron info
                        pool.query(
                            `INSERT INTO sqd
                                (
                                    sqd_c_s_s,
                                    sqd_tempo_band, 
                                    sqd_vulner_window, 
                                    sqd_next_p_c_s, 
                                    sqd_amn_id 
                                )
                            VALUES
                                (
                                    $1, $2, $3, $4, $5 
                                )`,
                            values,
                            (error, result) => {
                                if (error) {
                                    console.log(error);
                                }
                            }
                        )
                        res.status(200).send(JSON.stringify(
                            `Your request has gone through, thank you.`
                        ))
                    }
                }
            )
    }
}

//GET all by Amn, sqd, and base
const allAmn = (req, res) => {
    let type = req.params.type;

    switch (type) {
//GETs all Amn and organizes them by ID, assending
        case "amn":
            pool.query(
                "SELECT * FROM amn ORDER BY amn_id ASC",
                (error, results) => {
                    if (error) {
                        throw error;
                    }
                    res.status(200).send(JSON.stringify(results.rows));
                });
            break;
//GETs the Amn's name and rank as well as their in-processing progress within the squadron
        case "sqd":
            pool.query(
                `SELECT 
                    a.amn_rank AS Amn_Rank,
                    a.amn_f_name AS Amn_First_Name,
                    a.amn_l_name AS Amn_Last_Name,
                    s.sqd_c_s_s AS in_procesd_with_css,
                    s.sqd_tempo_band AS assigned_tempo_band,
                    s.sqd_vulner_window AS next_vulnr_window,
                    s.sqd_next_p_c_s AS next_eligable_to_pcs
                FROM amn AS a FULL JOIN sqd AS s ON a.amn_id = s.sqd_amn_id`,
                (error, results) => {
                    if (error) {
                        throw error;
                    }
                    res.status(200).send(JSON.stringify(results.rows));
                });
            break;
//GETs the Amn's name and rank as well as their in-processing progress within the base
        case "base":
            pool.query(
                `SELECT 
                    a.amn_rank AS Amn_Rank,
                    a.amn_f_name AS Amn_First_Name,
                    a.amn_l_name AS Amn_Last_Name,
                    b.base_m_p_f AS in_prod_with_mpf,
                    b.base_new_come_brief AS has_attnd_new_come_brief,
                    b.base_d_licns_brief AS has_attnd_driver_brief,
                    b.base_law_brief AS has_attnd_law_brief,
                    b.base_ntwrk_rites AS has_elevated_ntwrk_rights
                FROM amn AS a FULL JOIN base AS b ON a.amn_id = b.base_amn_id`,
                (error, results) => {
                    if (error) {
                        throw error;
                    }
                    res.status(200).send(JSON.stringify(results.rows));
                });
            break;
//GETs all info from all tables
            case "all":
                pool.query(
                    `SELECT 
                        a.amn_id AS Amn_ID,
                        a.amn_f_name AS First_Name,
                        a.amn_m_i AS MI,
                        a.amn_l_name AS Last_Name,
                        a.amn_rank AS Rank,
                        a.amn_sq AS Squadron,
                        a.amn_flt AS Flight,
                        a.amn_office Office_Symbol,
                        a.amn_d_o_a AS Date_of_Arrival,
                        a.amn_d_licns AS Drivers_License,
                        a.amn_o_s AS Overseas,
                        s.sqd_id AS Squadron_ID,
                        s.sqd_c_s_s AS CSS,
                        s.sqd_tempo_band AS Tempo_Band,
                        s.sqd_vulner_window AS Vulnerability_Window,
                        s.sqd_next_p_c_s AS Eligable_to_PCS,
                        s.sqd_amn_id AS squadron_Amn_ID,
                        b.base_id AS Base_ID,
                        b.base_m_p_f AS MPF,
                        b.base_new_come_brief AS New_Commers_Brief,
                        b.base_d_licns_brief AS Diving_Brief,
                        b.base_law_brief AS Foreign_County_Law_Brief,
                        b.base_ntwrk_rites AS Network_Rights,
                        b.base_amn_id AS base_Amn_ID     
                    FROM amn AS a
                    FULL JOIN base AS b ON a.amn_id = b.base_amn_id
                    FUll JOIN sqd AS s ON a.amn_id = s.sqd_amn_id;`,
                    (error, results) => {
                        if (error) {
                            throw error;
                        }
                        res.status(200).send(JSON.stringify(results.rows));
                    });
                break;

        default:
            res.send(JSON.stringify("Sorry, dude, I couldnt find what you asked for."));
    }
};

//Get specific Amn GET


//Update Amn POST
       

//Delete Amn DELTE


module.exports = {
    addAmn,
    allAmn,
    
}