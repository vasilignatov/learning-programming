# examples
SELECT COUNT(*) 
FROM employees as e 
JOIN addresses as a ON e.address_id = a.address_id
JOIN towns as t ON t.town_id = a.town_id
WHERE t.name = 'Sofia';  

SELECT COUNT(*)
FROM employees as e
WHERE e.address_id IN (
	SELECT address_id FROM addresses as a
	WHERE a.town_id = (
		SELECT town_id FROM towns 
        WHERE name = 'Sofia'
	)
);

DELIMITER $$
CREATE FUNCTION ufn_count_employees_by_town ()
RETURNS INT
DETERMINISTIC  
BEGIN
	RETURN ( SELECT COUNT(*) 
	FROM employees as e 
	JOIN addresses as a ON e.address_id = a.address_id
	JOIN towns as t ON t.town_id = a.town_id
	WHERE t.name = 'Sofia' 
);
END$$

SELECT ufn_count_employees_by_town()$$



# TASK 1.Count Employees by Town

DELIMITER $$
CREATE FUNCTION ufn_count_employees_by_town_name(town_name VARCHAR(50))
RETURNS INT
DETERMINISTIC  
BEGIN
	DECLARE id_for_town INT;
	DECLARE count_by_town INT;
    
	SET id_for_town := ( SELECT town_id FROM towns WHERE name = town_name);
    SET count_by_town := (
		SELECT COUNT(*) FROM `employees` as e
        WHERE e.address_id IN (
			SELECT address_id FROM addresses WHERE town_id = id_for_town
		)
    );
    
    RETURN count_by_town;
    
END$$

SELECT ufn_count_employees_by_town_name('Sofia');


#TASK 2.Employees Promotion
DELIMITER $$
CREATE PROCEDURE usp_raise_salary(department_name VARCHAR(50))
BEGIN
	UPDATE employees SET salary = salary * 1.05
    WHERE department_id = (
		SELECT department_id FROM departments WHERE `name` = department_name
    );
END$$

CALL usp_raise_salary('Engineering');


#TASK 3. Employees Promotion By ID
DELIMITER $$
CREATE PROCEDURE usp_raise_salary_by_id(id INT)
BEGIN 
	DECLARE count_by_id INT;
    
    START TRANSACTION;
    SET count_by_id := (SELECT COUNT(*) FROM employees as e WHERE e.employee_id = id);
    
    UPDATE employees SET salary = salary * 1.05 WHERE emloyee_id = id;
    
    IF (count_by_id < 1) THEN
		ROLLBACK;
	ELSE
		COMMIT;
    END IF;
    
END$$

CALL usp_raise_salary_by_id(2);



# 4. Triggered
CREATE TABLE `deleted_employees` (
  `employee_id` int NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `job_title` varchar(50) NOT NULL,
  `department_id` int NOT NULL,
  `salary` decimal(19,4) NOT NULL,
  PRIMARY KEY (`employee_id`)
);


DELIMITER $$
CREATE TRIGGER tr_deleted_employees
AFTER DELETE
ON employees
FOR EACH ROW
BEGIN

	INSERT INTO deleted_employees
    VALUES (
    OLD.employee_id, 
    OLD.first_name,
    OLD.last_name, 
    OLD.middle_name,
    OLD.job_title,
    OLD.department_id,
    OLD.salary);

END$$

SELECT * FROM employees as e 
WHERE (
	SELECT COUNT(*) 
	FROM employees_projects as ep 
    WHERE ep.employee_id = e.employee_id
    ) = 0;
    
DELETE FROM employees WHERE employee_id = 2;




