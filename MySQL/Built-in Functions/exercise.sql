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

#10. Countries Holding 'A'
SELECT `country_name`, `iso_code` FROM `countries`
WHERE `country_name` LIKE '%a%a%a%'
ORDER BY `iso_code`;

#11. Mix of Peak and River Names
SELECT 
	`peak_name`, 
    `river_name`, 
	CONCAT(LOWER(`peak_name`), SUBSTRING(LOWER(`river_name`), 2)) AS 'mix' 
FROM `peaks`, `rivers`
WHERE RIGHT(`peak_name`, 1) = LEFT(`river_name`, 1)
ORDER BY `mix`;

#12. Games From 2011 and 2012 Year
SELECT `name`, date_format(`start`, '%Y-%m-%d') AS `start` FROM `games`
WHERE YEAR(`start`) IN (2011, 2012)
ORDER BY `start`, `name`
LIMIT 50;
    
#13. User Email Providers
SELECT `user_name`, SUBSTRING(`email`, LOCATE('@', `email`) + 1 ) AS `Email Provider` FROM `users`
ORDER BY `Email Provider`, `user_name`;

#14. Get Users with IP Address Like Pattern
SELECT `user_name`, `ip_address`FROM `users`
where `ip_address` LIKE "___.1%.%.___"
ORDER BY `user_name`;

#15. Show All Games with Duration
SELECT `name` AS `game`, 
CASE 
WHEN HOUR(`start`) >= 0 AND HOUR(`start`) < 12 THEN 'Morning'
WHEN HOUR(`start`) >= 12 AND HOUR(`start`) < 18 THEN 'Afternoon' 
ELSE 'Evening'
END
AS `Part of the Day`,

CASE 
WHEN duration <= 3 THEN `Extra Short`
WHEN duration <= 6 THEN `Short`
WHEN duration <= 10 THEN `Long`
ELSE 'Evening'
END
AS `Duration`
FROM `games`;


#16. Orders Table
SELECT 
	`product_name`,
	`order_date`,
    adddate(`order_date`, interval 3 day) AS 'pay_due',
    adddate(`order_date`, interval 1 month) AS 'deliver_due'
FROM `orders`;
