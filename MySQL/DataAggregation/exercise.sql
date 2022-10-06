#1.	 Records' Count
SELECT COUNT(*) FROM `wizzard_deposits`;

#2. Longest Magic Wand
SELECT MAX(`magic_wand_size`) AS `magic_wand_size`
FROM `wizzard_deposits`;

#03. Longest Magic Wand per Deposit Groups
SELECT  
	`deposit_group` , 
    max(`magic_wand_size`) AS `longest_magic_wand`
FROM `wizzard_deposits`
GROUP BY `deposit_group`
ORDER BY `magic_wand_size`, `deposit_group`; 

# 4. Smallest Deposit Group Per Magic Wand Size*
SELECT `deposit_group`
FROM `wizzard_deposits`
GROUP BY `deposit_group`
HAVING AVG(`magic_wand_size`)
LIMIT 1;

SELECT `deposit_group`
FROM `wizzard_deposits`
GROUP BY `deposit_group`
ORDER BY AVG(`magic_wand_size`)
LIMIT 1;

#05. Deposits Sum
SELECT 
	`deposit_group`,
    SUM(`deposit_amount`)  AS `total_sum`
FROM `wizzard_deposits`
GROUP BY `deposit_group`
ORDER BY `total_sum`;

# 6. Deposits Sum for Ollivander Family
SELECT 
	`deposit_group`, 
    SUM(`deposit_amount`)  AS 'total_sum'
FROM `wizzard_deposits`
WHERE `magic_wand_creator` = 'Ollivander family'
GROUP BY `deposit_group`
ORDER BY `deposit_group`;
								 
# 7. Deposits Filter
SELECT 
	`deposit_group`, 
    SUM(`deposit_amount`)  AS 'total_sum'
FROM `wizzard_deposits`
WHERE `magic_wand_creator` = 'Ollivander family'
GROUP BY `deposit_group`
HAVING 	`total_sum` < 150000
ORDER BY `total_sum` DESC;

# 8. Deposit Charge
SELECT 
	`deposit_group`, 
    `magic_wand_creator`,
    MIN(`deposit_charge`) AS `min_deposit_charge`
FROM `wizzard_deposits`
GROUP BY `deposit_group`, `magic_wand_creator`
ORDER BY `magic_wand_creator`, `deposit_group`;

# 9. Age Groups
SELECT (
	CASE 
    WHEN `age` BETWEEN 0 AND 10 THEN '[1-10]'
	WHEN `age` BETWEEN 11 AND 20 THEN '[11-20]'
    WHEN `age` BETWEEN 21 AND 30 THEN '[21-30]'
    WHEN `age` BETWEEN 31 AND 40 THEN '[31-40]'
    WHEN `age` BETWEEN 41 AND 50 THEN '[41-50]'
    WHEN `age` BETWEEN 51 AND 60 THEN '[51-60]'
    WHEN `age` > 61 THEN '[61+]'
    END) 
    AS 'age_group',
    COUNT(`age`) AS `wizard_count`
FROM `wizzard_deposits`
GROUP BY `age_group`
ORDER BY `age_group`;

# 10. First Letter
SELECT 
	 LEFT(`first_name`, 1)  AS 'first_letter'
FROM `wizzard_deposits`
WHERE `deposit_group` = 'Troll Chest'
GROUP BY `first_letter`
ORDER BY `first_letter`;

#11. Average Interest 
SELECT 
	 `deposit_group`,
     `is_deposit_expired`,
     AVG(`deposit_interest`) AS `avewrage_interest`
FROM `wizzard_deposits`
WHERE `deposit_start_date` > '1985-01-01'
GROUP BY `deposit_group`, `is_deposit_expired`
ORDER BY `deposit_group` DESC, `is_deposit_expired`;

#12. Employees Minimum Salaries
SELECT 
	`department_id`, 
    MIN(`salary`) AS 'minimum_salary'
FROM `employees`
WHERE `hire_date` > '2000-01-01' 
GROUP BY `department_id`
HAVING `department_id` IN(2,5,7)
ORDER BY `department_id`;

# 13. Employees Average Salaries
CREATE TABLE `high_paid_employees` AS
SELECT * FROM `employees`
WHERE `salary` > 30000;

DELETE FROM `high_paid_employees`
WHERE `manager_id` = 42;

UPDATE `high_paid_employees`
SET `salary` = `salary` + 5000
WHERE `department_id` = 1;

SELECT 
	`department_id`, 
    AVG(`salary`) AS 'avg_salary'
FROM `high_paid_employees`
GROUP BY `department_id`
ORDER BY `department_id`;

# 14. Employees Maximum Salaries
SELECT 
	`department_id`, 
    max(`salary`) AS 'max_salary'
FROM `employees`
GROUP BY `department_id`
HAVING `max_salary` NOT BETWEEN 30000 and  70000
ORDER BY `department_id`;

# 15. Employees Count Salaries
SELECT COUNT(`salary`) as '' FROM `employees`
WHERE `manager_id` IS NULL;

# 16. 3rd Highest Salary*
SELECT `department_id`, (
		SELECT DISTINCT `salary` FROM  `employees` e2
        WHERE e1.`department_id` = e2.`department_id`
        ORDER BY `salary` DESC
        LIMIT 1 OFFSET 2
    ) AS 'third_highest_salary'
FROM `employees` e1	
GROUP BY `department_id`
HAVING `third_highest_salary` IS NOT NULL
ORDER BY `department_id`;

# 17. Salary Challenge**
SELECT `first_name`, `last_name`, `department_id` FROM `employees` AS current_employee
WHERE `salary` > (
	SELECT AVG(`salary`) FROM `employees` AS other_employeees
	WHERE current_employee.`department_id` = other_employeees.`department_id` 
)
ORDER BY `department_id`, `employee_id`
LIMIT 10;

# 18. Departments Total Salaries
SELECT `department_id`, SUM(`salary`) as `total_salary` FROM `employees`
GROUP BY `department_id`
ORDER BY `department_id`







