
CREATE TABLE packages
(package_code char(4) primary key,
 title varchar2(20) not null unique,
 description varchar2(100) not null,
 monthly_rent number(10,2) not null
);

INSERT INTO packages VALUES 
('S001', 'South Plus', 'etv,zee tv,gemini',200.0);
INSERT INTO packages VALUES
('S002', 'South Gold', 'etv,zee tv,gemini,movies,news',500.0);
INSERT INTO packages VALUES
('N001', 'North Plus', 'star plus,set max,zee tv',150.0);
INSERT INTO packages VALUES
('N002', 'North Gold', 'star plus,set max,zee tv,movies,news',350.0);
INSERT INTO packages VALUES
('B001', 'Bharat Plus', 'etv,zee tv,gemini,star plus,set max,zee tv',300.0);
INSERT INTO packages VALUES
('B002', 'Bharat Gold', 'etv,zee tv,gemini,star plus,set max,zee tv,movies,news',600.0);
INSERT INTO packages VALUES
('OTT1', 'Amazon', 'Amazon Prime, Amazon Music',200.0);
INSERT INTO packages VALUES
('OTT2', 'ZEE', 'Zee Channels, ZEE 5',150.0);
INSERT INTO packages VALUES
('OTT3', 'Sony', 'Sony Channels, Sony Liv',200.0);
INSERT INTO packages VALUES
('OTT4', 'Disney', 'Disney Channels, Hot Star',220.0);


CREATE TABLE subscribers
(
    subscriber_id integer primary key,
    full_name varchar2(50) not null,
    date_of_registration date not null,
    mobile_number char(10) not null
);

CREATE TABLE subscriptions
(
    subscription_id integer primary key,
    package_code char(4) not null,
    subscriber_id integer not null,
    date_valid_from date not null,
    date_valid_to date not null,
    term varchar2(10) not null,
    fee number(10,2) not null
);
