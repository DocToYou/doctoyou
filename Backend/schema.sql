use doctoyou;
show tables;
desc providers;
-- SELECT GROUP_CONCAT('DROP TABLE IF EXISTS ', table_name, ';') 
-- FROM information_schema.tables 
-- WHERE table_schema = 'doctoyou';
-- DROP TABLE IF EXISTS appointments;
-- DROP TABLE IF EXISTS availability;
-- DROP TABLE IF EXISTS caretaker_cred;
-- DROP TABLE IF EXISTS doctor_cred;
-- DROP TABLE IF EXISTS nurse_cred;
-- DROP TABLE IF EXISTS reviews;
-- DROP TABLE IF EXISTS providers;
-- DROP TABLE IF EXISTS services;
-- DROP TABLE IF EXISTS users;
-- drop procedure add_provider;

CREATE TABLE IF NOT EXISTS providers(
	id INT auto_increment,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100),
    gender CHAR(1),	
	role ENUM('caretaker', 'doctor', 'nurse', 'admin') NOT NULL,
    phone BIGINT NOT NULL,
    email VARCHAR(100) NOT NULL,
	password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- time of creation
    constraint pk_ID primary key(id),
    constraint UNIQUE_EMAIL UNIQUE(email),
    constraint gender_MFO check(GENDER IN ('M','F','O'))
    );
    
desc providers;

CREATE TABLE IF NOT exists doctor_cred (
id int auto_increment, p_id int , license varchar(255) not null, specialization varchar(60) not null,
constraint pk primary key(id),
constraint FK_pid_doctor foreign key(p_id) references providers(id) on delete cascade,
constraint UNIQUE_LICENSE_doctor unique(license)
);

CREATE TABLE IF NOT exists nurse_cred (
id int auto_increment, p_id int, license varchar(255) not null, degree varchar(30) not null,
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
    constraint UNIQUE_EMAIL UNIQUE(email),
    constraint gender_MFO_users check(GENDER IN ('M','F','O'))
);

CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    description TEXT,
    -- service_type ENUM(""),
    -- price DECIMAL(10, 2) NOT NULL
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

DELIMITER $$

CREATE PROCEDURE add_provider  (
    IN p_fname VARCHAR(100),
    IN p_lname VARCHAR(100),
    IN p_gender CHAR(1),
    IN p_role ENUM('Doctor', 'Nurse', 'Caretaker','Admin'),
    IN p_phone BIGINT,
    IN p_email VARCHAR(100),
    IN p_password VARCHAR(255),
    IN p_license VARCHAR(255),         -- for doctors
    IN p_specialization VARCHAR(60), -- for doctors
    IN p_registration VARCHAR(255),    -- for nurses
    IN p_department VARCHAR(30)  -- for nurses
)
BEGIN
    DECLARE new_id INT;

    -- Insert into base providers table
    INSERT INTO providers (fname, lname, gender, role, phone, email, password)
    VALUES (p_fname, p_lname, p_gender, p_role, p_phone, p_email, p_password);

    SET new_id = LAST_INSERT_ID();

    -- Role-specific insertion
    IF p_role = 'Doctor' THEN
        INSERT INTO doctor_cred(p_id,license,specialization) 
        VALUES (new_id, p_license, p_specialization);
    ELSEIF p_role = 'Nurse' THEN
        INSERT INTO nurse_cred(p_id,license,degree)
        VALUES (new_id, p_registration, p_department);
    ELSEIF p_role = 'Caretaker' THEN
        INSERT INTO caretaker_cred (p_id)
        VALUES (new_id);
    END IF;
END$$

DELIMITER ;

show tables;
-- SELECT * FROM information_schema.columns WHERE table_schema = 'doctoyou';
CALL add_provider(
  'Alice', 'Smith', 'F', 'Doctor', 9876543210, 'alice@hospital.com', 'securepass',
  'DOC12345', 'Cardiology', NULL, NULL
);
CALL add_provider(
  'Bob', 'Jones', 'M', 'Nurse', 9876543211, 'bob@nurse.com', 'securepass',
  NULL, NULL, 'NUR67890', 'Emergency'
);

CALL add_provider(
  'Charlie', 'Brown', 'M', 'Caretaker', 9876543212, 'charlie@care.com', 'securepass',
  NULL, NULL, NULL, NULL
);

truncate table providers;
select * from providers; 
select * from doctor_cred;
select * from nurse_cred;
select * from caretaker_cred