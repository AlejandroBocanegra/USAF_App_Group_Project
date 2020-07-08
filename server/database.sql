psql -U usaf_user postgres;
usafisthebest

CREATE DATABASE usaf_app_group_project;

\c usaf_app_group_project;

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