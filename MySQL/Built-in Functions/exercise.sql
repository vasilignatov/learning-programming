#1.	Find Names of All Employees by First Name
SELECT `first_name`, `last_name`
FROM `employees`
WHERE LOCATE('Sa', `first_name`) = 1
ORDER BY `employee_id`;

SELECT `first_name`, `last_name`
FROM `employees`
WHERE `first_name`  LIKE 'Sa%'
ORDER BY `employee_id`;


#2.	Find Names of All Employees by Last Name
SELECT `first_name`, `last_name`
FROM `employees`
WHERE LOCATE('ei', last_name)
ORDER BY `employee_id`;

SELECT `first_name`, `last_name`
FROM `employees`
WHERE `last_name` LIKE '%ei%'
ORDER BY `employee_id`;

#3.	Find First Names of All Employees
SELECT `first_name`
FROM `employees`
WHERE `department_id` IN (3, 10)
AND	EXTRACT(YEAR FROM `hire_date`) BETWEEN 1995 AND 2005
ORDER BY `employee_id`;

SELECT `first_name`
FROM `employees`
WHERE (`department_id` IN (3, 10))
AND	
YEAR (`hire_date`) BETWEEN 1995 AND 2005
ORDER BY `employee_id`;


#4.	Find All Employees Except Engineers
SELECT `first_name`, `last_name` 
FROM `employees`
WHERE `job_title` NOT LIKE '%engineer%';

#5.	Find Towns with Name Length
SELECT `name` 
FROM `towns`
WHERE CHAR_LENGTH(`name`) = 5 OR CHAR_LENGTH(`name`) = 6
ORDER BY `name`;


#6.	 Find Towns Starting With
SELECT *
FROM `towns`
WHERE `name`
	`name` LIKE 'm%' OR 
    `name` LIKE 'k%' OR 
    `name` LIKE 'b%' OR
    `name` LIKE 'e%'
ORDER BY `name`;


#7.	Find Towns Not Starting With
SELECT *
FROM `towns`
WHERE 
	`name` NOT LIKE 'r%' AND
    `name` NOT LIKE 'b%' AND 
    `name` NOT LIKE 'd%' 
ORDER BY `name`;


#8.	Create View Employees Hired After 2000 Year
CREATE VIEW v_employees_hired_after_2000 AS 
SELECT `first_name`, `last_name`
FROM `employees`
WHERE YEAR(`hire_date`) > 2000;
SELECT * FROM v_employees_hired_after_2000;


#9.	Length of Last Name
SELECT `first_name`, `last_name`
FROM `employees`
WHERE char_length(`last_name`) = 5;

