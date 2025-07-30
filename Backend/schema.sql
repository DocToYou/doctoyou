-- USER DATABASE SCHEMA 

create database doctoyou; -- ONLY FOR FIRST TIME
-- If the database already exists, you can comment out the above line.
use doctoyou;

CREATE TABLE users(Fname varchar(80) not null, Lname varchar(40), 
Gender char(1), -- Male : M, Female : F, Others : O
 phone int(12) primary key,
email varchar(30), Password varchar(100) not null
);

desc users; 