CREATE TABLE amn (
    amn_id SERIAL PRIMARY KEY,
    amn_f_name varchar (15),
    amn_m_i varchar (3),
    amn_l_name varchar (20),
    amn_rank varchar (5),
    amn_sq varchar (8),
    amn_flt varchar (4),
    amn_office varchar(4),
    amn_d_o_a date,
    amn_d_licns boolean,
    amn_o_s boolean
);

CREATE TABLE sqd (
    sqd_id SERIAL PRIMARY KEY,
    sqd_c_s_s boolean,
    sqd_tempo_band varchar(10),
    sqd_vulner_window date,
    sqd_next_p_c_s date,
    sqd_amn_id integer
);

CREATE TABLE base (
    base_id SERIAL PRIMARY KEY,
    base_m_p_f boolean,
    base_new_come_brief boolean,
    base_d_licns_brief boolean,
    base_law_brief boolean,
    base_ntwrk_rites boolean,
    base_amn_id integer
);

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