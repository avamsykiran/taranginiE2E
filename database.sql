DROP DATABASE IF EXISTS tarangini;

CREATE DATABASE tarangini;

USE tarangini;

CREATE TABLE packages
(package_code char(4) primary key,
 title varchar(20) not null unique,
 description varchar(100) not null,
 monthly_rent double not null
);

INSERT INTO packages VALUES 
('S001', 'South Plus', 'etv,zee tv,gemini',200.0),
('S002', 'South Gold', 'etv,zee tv,gemini,movies,news',500.0),
('N001', 'North Plus', 'star plus,set max,zee tv',150.0),
('N002', 'North Gold', 'star plus,set max,zee tv,movies,news',350.0),
('B001', 'Bharat Plus', 'etv,zee tv,gemini,star plus,set max,zee tv',300.0),
('B002', 'Bharat Gold', 'etv,zee tv,gemini,star plus,set max,zee tv,movies,news',600.0),
('OTT1', 'Amazon', 'Amazon Prime, Amazon Music',200.0),
('OTT2', 'ZEE', 'Zee Channels, ZEE 5',150.0),
('OTT3', 'Sony', 'Sony Channels, Sony Liv',200.0),
('OTT4', 'Disney', 'Disney Channels, Hot Star',220.0);


CREATE TABLE subscribers
(
    subscriber_id int primary key,
    full_name varchar(50) not null,
    date_of_registration date not null,
    mobile_number char(10) not null
);

CREATE TABLE subscriptions
(
    subscription_id int primary key,
    package_code char(4) not null,
    subscriber_id int not null,
    date_valid_from date not null,
    date_valid_to date not null,
    term varchar(10) not null,
    fee double not null
);
