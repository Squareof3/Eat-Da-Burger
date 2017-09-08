create database burgers_db;
use burgers_db;
create table burgers(id integer(10) auto_increment, burger_name varchar(50) not null, devoured boolean DEFAULT false, date timestamp, primary key(id));
