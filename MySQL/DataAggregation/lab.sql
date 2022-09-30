#task 1
SELECT `department_id`, count(`id`)
FROM `employees`
GROUP BY `department_id`;

#task 2
SELECT `department_id`, ROUND(AVG(`salary`),2)  AS 'Average Salary' 
FROM `employees`
GROUP BY `department_id`
ORDER BY `department_id`;

#task 3
SELECT `department_id`, ROUND(MIN(`salary`), 2) 
FROM `employees`
WHERE MIN(`salary`) > 800
GROUP BY `department_id`;
