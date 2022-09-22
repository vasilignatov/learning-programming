#task 1
SELECT * FROM  `departments`
ORDER BY `department_id`;


#task 2
SELECT `name` FROM `departments`
ORDER BY `department_id` ASC;

#task 3
SELECT `first_name`, `last_name`, `salary` FROM `employees`
ORDER BY `employee_id`;

#taks 4
SELECT `first_name`, `middle_name`, `last_name` FROM `employees`
ORDER BY `employee_id`;

#task 5

SELECT CONCAT(`first_name`, '.', `last_name`, '@softuni.bg')
AS `full_ email_address` 
FROM `employees`;


#task 6
SELECT DISTINCT `salary` FROM `employees`;

#task 7
SELECT * FROM `employees`
WHERE `job_title` = "Sales Representative"
ORDER BY `employee_id`;

#task 8
SELECT `first_name`, `last_name`, `job_title` FROM `employees`
WHERE `salary` >= 20000 AND `salary` <= 30000;

SELECT `first_name`, `last_name`, `job_title` FROM `employees`
WHERE `salary` BETWEEN 20000 AND  30000;

#task 9
SELECT CONCAT_WS(' ', `first_name`, `middle_name`, `last_name`) AS 'Full Name'
FROM `employees`
WHERE `salary` = 25000 OR `salary` = 14000 OR `salary` = 12500 OR `salary` = 23600;

SELECT CONCAT_WS(' ', `first_name`, `middle_name`, `last_name`) AS 'Full Name'
FROM `employees`
WHERE `salary` IN ( 25000, 14000, 12500, 23600);

#task 10
SELECT `first_name`, `last_name` FROM `employees`
WHERE `manager_id` IS NULL;

#task 11 
SELECT `first_name`, `last_name`, `salary` FROM `employees`
WHERE `salary` > 50000
ORDER BY `salary` DESC;

#task 12
SELECT `first_name`, `last_name` FROM `employees`
ORDER BY `salary` DESC
LIMIT 5;

#task 13
SELECT `first_name`, `last_name` FROM `employees`
WHERE NOT `department_id` = 4;

SELECT `first_name`, `last_name` FROM `employees`
WHERE `department_id` != 4;

#task 14
SELECT * FROM `employees`
ORDER BY `salary` DESC, `first_name`, `last_name` DESC, `middle_name`, `employee_id`;
 
#task 15
CREATE VIEW `v_employees_salaries` AS
SELECT `first_name`, `last_name`, `salary` FROM `employees`;

SELECT * FROM `v_employees_salaries`;

#task 16
CREATE VIEW `v_employees_job_titles` AS
SELECT CONCAT_WS(' ', `first_name`,  `middle_name`,`last_name`) AS 'full_name', `job_title` 
FROM `employees`;

SELECT * FROM `v_employees_job_titles`;

#task 17
SELECT DISTINCT `job_title` FROM `employees`
ORDER BY `job_title`;

#task 18 
SELECT * FROM `projects`
ORDER BY `start_date`, `name`
LIMIT 10;

#task 19
SELECT `first_name`, `last_name`, `hire_date` FROM `employees`
ORDER BY `hire_date` DESC
LIMIT 7;

#task 20
UPDATE `employees`
SET `salary` = `salary` * 1.12
WHERE `department_id` IN (1, 2, 4, 11);

SELECT `salary` FROM `employees`;

#task 21
SELECT `peak_name` FROM `peaks`
ORDER BY `peak_name`;

#task 22
SELECT `country_name`, `population` FROM `countries`
WHERE `continent_code` = 'EU'
ORDER BY `population` DESC, `country_name`
LIMIT 30;

#task 23
SELECT `country_name`, `country_code`,
IF (`currency_code` = "EUR", 'Euro', 'Not Euro') AS `currency`
FROM `countries`
ORDER BY `country_name`;

#task 24
SELECT `name` FROM `characters`
ORDER BY `name`