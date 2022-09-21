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
 

