use doctoyou;
show tables;

-- Procedure to insert provider data
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

-- procedure to retrieve provider data
DELIMITER $$
CREATE PROCEDURE get_providers(
    IN p_role ENUM('Doctor', 'Nurse', 'Caretaker','Admin')
)
BEGIN
    select * from providers where role=p_role;
END$$
DELIMITER $$;

drop procedure get_providers;
call get_providers("Doctor");
select * from providers;
select * from doctor_cred;

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

select * from providers;
select * from doctor_cred;
select * from nurse_cred;
select * from caretaker_cred;