--// Amn Sample Data //--

INSERT INTO amn (amn_f_name, amn_m_i, amn_l_name, amn_rank, amn_sq, amn_flt, amn_office, amn_d_o_a, amn_d_licns, amn_o_s)
VALUES ('Joe',
        'C',
        'Snuffy',
        'SSgt',
        '123 CS',
        'ABCD',
        'EFGH',
        'Jun-04-2020',
        'yes',
        'no'), ('Jane',
                'B',
                'Smith',
                'SrA',
                '123 CS',
                'ABCD',
                'EFGH',
                'Feb-02-2016',
                'no',
                'no'), ('John',
                        'Q',
                        'Public',
                        'A1C',
                        '123 CS',
                        'ABCD',
                        'EFGH',
                        'Aug-24-2019',
                        'yes',
                        'no'), ('Maria',
                                'A',
                                'Salvador',
                                'Amn',
                                '123 CS',
                                'ABCD',
                                'EFGH',
                                'Jul-04-2020',
                                'yes',
                                'no');

--//sqd Sample Date //--

INSERT INTO sqd (sqd_c_s_s, sqd_tempo_band, sqd_vulner_window, sqd_next_p_c_s, sqd_amn_id)
VALUES ('no',
        'blue',
        'Jan-04-2021',
        'Jun-05-2024',
        1), ('yes',
             'green',
             'Aug-02-2020',
             'Feb-03-2020',
             2), ('yes',
                  'yellow',
                  'Feb-24-2020',
                  'Aug-25-2023',
                  3), ('yes',
                       'blue',
                       'Jan-04-2022',
                       'Jul-05-2024',
                       4);

--//base Sample Date //--

INSERT INTO base (base_m_p_f, base_new_come_brief, base_d_licns_brief, base_law_brief, base_ntwrk_rites, base_amn_id)
VALUES ('yes',
        'no',
        'no',
        null,
        'yes',
        1), ('yes',
             'yes',
             'no',
             null,
             'yes',
             2), ('yes',
                  'yes',
                  'no',
                  null,
                  'yes',
                  3), ('yes',
                       'yes',
                       null,
                       null,
                       'yes',
                       4);

--Join Test--
-- Amn and Sqd inner join

SELECT a.amn_rank AS Amn_Rank,
       a.amn_f_name AS Amn_First_Name,
       a.amn_l_name AS Amn_Last_Name,
       s.sqd_c_s_s AS in_procesd_with_css,
       s.sqd_tempo_band AS assigned_tempo_band,
       s.sqd_vulner_window AS next_vulnr_window,
       s.sqd_next_p_c_s AS next_eligable_to_pcs
FROM amn AS a
FULL JOIN sqd AS s ON a.amn_id = s.sqd_amn_id;

--Amn and Base inner join

SELECT a.amn_rank AS Amn_Rank,
       a.amn_f_name AS Amn_First_Name,
       a.amn_l_name AS Amn_Last_Name,
       b.base_m_p_f AS in_prod_with_mpf,
       b.base_new_come_brief AS has_attnd_new_come_brief,
       b.base_d_licns_brief AS has_attnd_driver_brief,
       b.base_law_brief AS has_attnd_law_brief,
       b.base_ntwrk_rites AS has_elevated_ntwrk_rights
FROM amn AS a
FULL JOIN base AS b ON a.amn_id = b.base_amn_id;

-- All three tables inner join

SELECT a.amn_rank AS Rank,
       a.amn_f_name AS First_Name,
       a.amn_l_name AS Last_Name,
       s.sqd_c_s_s AS in_pro_with_css,
       s.sqd_tempo_band AS tempo_band,
       s.sqd_vulner_window AS next_vulnr_window,
       s.sqd_next_p_c_s AS next_eligable_to_pcs,
       b.base_m_p_f AS in_pro_with_mpf,
       b.base_new_come_brief AS attnded_new_come_brief,
       b.base_d_licns_brief AS attnded_driver_brief,
       b.base_law_brief AS attnded_law_brief,
       b.base_ntwrk_rites AS elevated_ntwrk_rights
FROM amn AS a
FULL JOIN base AS b ON a.amn_id = b.base_amn_id
Full JOIN sqd AS s ON a.amn_id = s.sqd_amn_id;

--Test case (delete after test)

INSERT INTO amn AS a (amn_f_name, amn_m_i, amn_l_name, amn_rank, amn_sq, amn_flt, amn_office, amn_d_o_a, amn_d_licns, amn_o_s)
VALUES ('George',
        'W',
        'Fredrick',
        'Gen',
        '17 CS',
        'UKGB',
        'TIRD',
        'Jun-04-2018',
        'no',
        'no') RETURNING *;

-- Prove test

Select *
FROM amn;

--Test dummy data

INSERT INTO sqd AS s (sqd_c_s_s, sqd_tempo_band, sqd_vulner_window, sqd_next_p_c_s, sqd_amn_id)
VALUES ('t',
        'yellow',
        'feb-5-2021',
        'july-4-2075');

-- Test Delete Statements
--Amn Table

DELETE
FROM amn
WHERE 
           amn_id = 60
        OR amn_id = 61
        OR amn_id = 62
        OR amn_id = 63
        OR amn_id = 64
        OR amn_id = 65
        OR amn_id = 66
        OR amn_id = 67
        OR amn_id = 68
        OR amn_id = 69;

-- sqd table

DELETE
FROM sqd
WHERE 
       sqd_amn_id = 60
    OR sqd_amn_id = 61
    OR sqd_amn_id = 62
    OR sqd_amn_id = 63
    OR sqd_amn_id = 64
    OR sqd_amn_id = 65
    OR sqd_amn_id = 66
    OR sqd_amn_id = 67
    OR sqd_amn_id = 68
    OR sqd_amn_id = 69;

--base table

DELETE
FROM base AS b
WHERE 
       b.base_amn_id = 60
    OR b.base_amn_id = 61
    OR b.base_amn_id = 62
    OR b.base_amn_id = 63
    OR b.base_amn_id = 64
    OR b.base_amn_id = 65
    OR b.base_amn_id = 66
    OR b.base_amn_id = 67
    OR b.base_amn_id = 68
    OR b.base_amn_id = 69;

SELECT * FROM amn;
SELECT * FROM sqd;
SELECT * FROM base;

--How to add data to three tables with one querry
WITH ins1 AS
    (INSERT INTO amn (amn_id, amn_f_name, amn_m_i, amn_l_name, amn_rank, amn_sq, amn_flt, amn_office, amn_d_o_a, amn_d_licns, amn_o_s)
     VALUES (DEFAULT,
             'George',
             'W',
             'Fredrick',
             'Gen',
             '17 CS',
             'UKGB',
             'TIRD',
             'Jun-04-2018',
             'no',
             'no') RETURNING amn_id),
     ins2 AS
    (INSERT INTO sqd (sqd_c_s_s, sqd_tempo_band, sqd_vulner_window, sqd_next_p_c_s, sqd_amn_id)
     VALUES ('yes',
             'yellow',
             'feb-5-2021',
             'july-4-2075',
                 (SELECT amn_id
                  FROM ins1)) RETURNING sqd_amn_id),
     ins3 AS
    (INSERT INTO base (base_id, base_m_p_f, base_new_come_brief, base_d_licns_brief, base_law_brief, base_ntwrk_rites, base_amn_id)
     VALUES (DEFAULT,
             'yes',
             'yes',
             'yes',
             'yes',
             'yes',
                 (SELECT sqd_amn_id
                  FROM ins2))) --The SELECT statement wont actually work because its calling to the data before the nested INSERT statements, so run it again after this all goes through. The reason it is here is becuase WITH expects a querry after it runs.

SELECT a.amn_rank AS Rank,
       a.amn_f_name AS First_Name,
       a.amn_l_name AS Last_Name,
       s.sqd_c_s_s AS css_in_pro,
       s.sqd_tempo_band AS tempo_band,
       s.sqd_vulner_window AS next_vulnr_window,
       s.sqd_next_p_c_s AS next_eligable_to_pcs,
       b.base_m_p_f AS mpf_in_pro,
       b.base_new_come_brief AS new_come_brief,
       b.base_d_licns_brief AS driver_brief,
       b.base_law_brief AS law_brief,
       b.base_ntwrk_rites AS ntwrk_rights
    FROM amn AS a
    WHERE amn_l_name = "Snuffy"
    WHERE
    FULL JOIN base AS b ON a.amn_id = b.base_amn_id
    Full JOIN sqd AS s ON a.amn_id = s.sqd_amn_id;

SELECT a.amn_id AS Amn_ID,
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
    s.sqd_amn_id AS Amn_ID,
    b.base_id AS Base_ID,
    b.base_m_p_f AS MPF,
    b.base_new_come_brief AS New_Commers_Brief,
    b.base_d_licns_brief AS Diving_Brief,
    b.base_law_brief AS Foreign_County_Law_Brief,
    b.base_ntwrk_rites AS Network_Rights,
    b.base_amn_id AS Amn_ID
    FROM amn AS a
    FULL JOIN base AS b ON a.amn_id = b.base_amn_id
    FUll JOIN sqd AS s ON a.amn_id = s.sqd_amn_id;