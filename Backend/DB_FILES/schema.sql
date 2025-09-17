use doctoyou;
show tables;
select * from users;
select * from providers;
SELECT GROUP_CONCAT('DROP TABLE IF EXISTS ', table_name, ';') 
FROM information_schema.tables 
WHERE table_schema = 'doctoyou';
DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS availability;
DROP TABLE IF EXISTS caretaker_cred;
DROP TABLE IF EXISTS doctor_cred;
DROP TABLE IF EXISTS nurse_cred;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS p_details;
DROP TABLE IF EXISTS providers;
DROP TABLE IF EXISTS user_address;
DROP TABLE IF EXISTS users;

drop procedure add_provider;
CREATE TABLE IF NOT EXISTS providers(
	id INT auto_increment,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100),
    gender CHAR(1),	
	role ENUM('Caretaker', 'Doctor', 'Nurse', 'Admin') NOT NULL,
    phone BIGINT NOT NULL,
    email VARCHAR(100) NOT NULL,
	password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- time of creation
    constraint pk_ID primary key(id),
    constraint UNIQUE_EMAIL_PHONE UNIQUE(email,phone),
    constraint gender_MFO check(GENDER IN ('M','F','O'))
    );
    

CREATE TABLE IF NOT exists doctor_cred (
id int auto_increment, p_id int , license varchar(255) not null, specialization varchar(60) not null,
constraint pk primary key(id),
constraint FK_pid_doctor foreign key(p_id) references providers(id) on delete cascade,
constraint UNIQUE_LICENSE_doctor unique(license)
);

CREATE TABLE IF NOT exists nurse_cred (
id int auto_increment, p_id int, license varchar(255) not null, department varchar(30) not null,
constraint pk primary key(id),
constraint FK_pid_nurse foreign key(p_id) references providers(id),
constraint UNIQUE_LICENSE_nurse unique(license)
);

CREATE TABLE IF NOT exists caretaker_cred (
id int auto_increment, p_id int,
constraint pk_caretaker_id primary key(id),
constraint FK_p_id_caretaker foreign key(p_id) references providers(id)
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
    constraint pk_user_ID primary key(id),
    constraint UNIQUE_EMAIL_PHONE UNIQUE(email,phone),
    constraint gender_MFO_users check(GENDER IN ('M','F','O'))
);

CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    description TEXT,
    -- service_type ENUM(""),
    price DECIMAL(10, 2) NOT NULL,
    constraint pk_ID_services primary key(id)
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
    is_available boolean,
    provider_id INT NOT NULL,
    day_of_week ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    FOREIGN KEY (provider_id) REFERENCES providers(id) ON DELETE CASCADE on update cascade
);

CREATE TABLE IF NOT EXISTS reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    provider_id INT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES users(id) ON DELETE CASCADE on update cascade,
    FOREIGN KEY (provider_id) REFERENCES providers(id) ON DELETE CASCADE on update cascade
);

CREATE TABLE IF NOT EXISTS user_address (
id INT AUTO_INCREMENT PRIMARY KEY,
u_id INT NOT NULL,
is_primary boolean,
door_no varchar(5),
street varchar(30),
city varchar(15),
district varchar(10),
state varchar(20),
pincode int,
created_at TIMESTAMP default CURRENT_TIMESTAMP,
FOREIGN KEY fk_id (u_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS p_details(
id int primary key auto_increment,
p_id int not null,
base_price DECIMAL(10,2),
degree varchar(10),
university varchar(50),
profile_pic blob,
FOREIGN KEY fk_p_id (p_id) REFERENCES providers(id) ON DELETE CASCADE ON UPDATE CASCADE
);
show index from providers;
select * from nurse_cred limit 5;