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
        INSERT INTO nurse_cred(p_id,license,department)
        VALUES (new_id, p_registration, p_department);
    ELSEIF p_role = 'Caretaker' THEN
        INSERT INTO caretaker_cred (p_id)
        VALUES (new_id);
    END IF;
END$$
DELIMITER ;

-- procedure to retrieve provider data
DELIMITER $$
CREATE PROCEDURE get_available_providers(
    IN p_role ENUM('Doctor', 'Nurse', 'Caretaker','Admin')
)
BEGIN
    -- Declare a handler for SQL exceptions
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        -- You can log the error, rollback, or just signal failure
        SELECT 'An error occurred while fetching providers.' AS error_message;
    END;
    IF p_role='Doctor' THEN
    select fname,lname,gender,phone,email from providers where role=p_role order by fname desc;
    END IF;
END$$
DELIMITER $$;
select * from availability where day_of_week=DAYNAME(CURDATE());
-- SELECT CURRENT_DATE() AS CurrentDate, DAYNAME(CURRENT_DATE()) AS CurrentDay;

procedure to retrive
select is_available from availability;
select fname,lname,gender,phone,email from providers where role='Doctor' order by created_at desc;