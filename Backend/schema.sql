-- USER DATABASE SCHEMA 

create database if not exists doctoyou; -- ONLY FOR FIRST TIME
-- If the database already exists, you can comment out the above line.
use doctoyou;

CREATE TABLE IF NOT EXISTS providers(
	id INT auto_increment,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100),
    gender CHAR(1),	
	role ENUM('Caretaker', 'doctor', 'nurse', 'admin') NOT NULL,
    phone BIGINT NOT NULL,
    email VARCHAR(100) NOT NULL,
	password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- time of creation
    constraint pk_ID primary key(id),
    constraint UNIQUE_EMAIL UNIQUE(email),
    constraint gender_MFO check(GENDER IN ('M','F','O'))
    );
    
CREATE TABLE IF NOT EXISTS users (
	id INT auto_increment,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100),
    gender CHAR(1),
    phone BIGINT NOT NULL,
    email VARCHAR(100) NOT NULL,
	password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- time of creation
    constraint pk_ID primary key(id),
    constraint UNIQUE_EMAIL UNIQUE(email),
    constraint gender_MFO_users check(GENDER IN ('M','F','O'))
);

CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    description TEXT,
    -- service_type ENUM(""),
    -- price DECIMAL(10, 2) NOT NULL
    constraint pk_ID primary key(id)
);

CREATE TABLE IF NOT EXISTS appointments (
    id INT AUTO_INCREMENT,
    patient_id INT NOT NULL,
    provider_id INT NOT NULL,
    service_id INT NOT NULL,
    scheduled_at DATETIME NOT NULL default NOW(),
    status ENUM('pending', 'confirmed', 'cancelled', 'done') DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	constraint FK_USER_ID FOREIGN KEY (patient_id) REFERENCES users(id) ON DELETE CASCADE,
    constraint FK_PROVIDER_ID FOREIGN KEY (provider_id) REFERENCES providers(id) ON DELETE CASCADE,
    CONSTRAINT FK_SERVICE_ID FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE,
    constraint pk_ID primary key(id)
);

CREATE TABLE IF NOT EXISTS availability (
    id INT AUTO_INCREMENT PRIMARY KEY,
    provider_id INT NOT NULL,
    day_of_week ENUM('mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun') NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    FOREIGN KEY (provider_id) REFERENCES providers(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    provider_id INT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (provider_id) REFERENCES users(id) ON DELETE CASCADE
);

show tables;
SELECT * FROM information_schema.columns WHERE table_schema = 'doctoyou';