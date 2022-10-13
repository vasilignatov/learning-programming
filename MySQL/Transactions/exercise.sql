# 1.	Employees with Salary Above 35000
DELIMITER $$
CREATE PROCEDURE usp_get_employees_salary_above_35000()
BEGIN 
	SELECT first_name, last_name 
    FROM employees
    WHERE salary >35000
    ORDER BY first_name, last_name, employee_id;
END$$


#2.	Employees with Salary Above Number
DELIMITER $$
CREATE PROCEDURE usp_get_employees_salary_above(target_salary DECIMAL(19,4))
BEGIN
    SELECT first_name, last_name 
    FROM employees
    WHERE salary >= target_salary
    ORDER BY first_name, last_name, employee_id;
END$$


# 3.	Town Names Starting With
DELIMITER $$
CREATE PROCEDURE usp_get_towns_starting_with(start_str VARCHAR(50))
BEGIN
	SELECT `name` FROM towns
    WHERE `name` LIKE CONCAT(start_str, '%')
    ORDER BY `name`;
END$$


# 4.Employees from Town
DELIMITER $$
CREATE PROCEDURE usp_get_employees_from_town(town_name VARCHAR(50))
BEGIN
	SELECT first_name, last_name FROM employees as e
    JOIN addresses as a ON e.address_id = a.address_id
    JOIN towns as t ON t.town_id = a.town_id
    WHERE t.`name` = town_name
	ORDER BY first_name, last_name, employee_id;
END$$


# 5.Salary Level Function
DELIMITER $$
CREATE FUNCTION ufn_get_salary_level(salary DECIMAL(19,4))
RETURNS VARCHAR(10)
DETERMINISTIC
BEGIN
	DECLARE `level` VARCHAR(10);
	IF salary < 30000 THEN SET `level` := 'Low';
    ELSEIF salary BETWEEN 30000 AND 50000 THEN SET `level` := 'Average';
    ELSEIF salary > 50000 THEN SET `level` := 'High';
	END IF;
    RETURN `level`;
END$$


# 6.Employees by Salary Level
DELIMITER $$
CREATE PROCEDURE usp_get_employees_by_salary_level(salary_level VARCHAR(10))
BEGIN
	SELECT first_name, last_name FROM employees
	WHERE ufn_get_salary_level(salary) = salary_level
    ORDER BY first_name DESC, last_name DESC;
END$$


# 7.Define Function
DELIMITER $$
CREATE FUNCTION ufn_is_word_comprised(set_of_letters varchar(50), word varchar(50))
RETURNS INT #0 -> word не е съставена от set_of_letters
		   #1 -> word е съставена от set_of_letters
DETERMINISTIC
BEGIN
	RETURN word REGEXP(CONCAT('^[', set_of_letters, ']+$'));
END$$



# 8. Find Full Name
DELIMITER $$
CREATE PROCEDURE usp_get_holders_full_name()
BEGIN
	SELECT CONCAT(first_name, ' ', last_name) as 'full_name'
    FROM account_holders
    ORDER BY full_name, id;
END$$



# 9.People with Balance Higher Than
DELIMITER $$
CREATE PROCEDURE usp_get_holders_with_balance_higher_than(money DECIMAL(19,4))
BEGIN
	SELECT ah.`first_name`, ah.`last_name` FROM account_holders as ah
    LEFT JOIN accounts as a ON a.account_holder_id = ah.id
    GROUP BY ah.`first_name`, ah.`last_name`
    HAVING SUM(a.balance) > money
    ORDER BY ah.id;
END$$


#10. Future Value Function
DELIMITER $$
CREATE FUNCTION ufn_calculate_future_value(sum DECIMAL(19,4), yearly_rate DOUBLE, years INT)
RETURNS DECIMAL (19,4)
DETERMINISTIC
BEGIN
	DECLARE future_sum DECIMAL(19,4);
    SET future_sum := sum * (POW(1 + yearly_rate, years));
	RETURN future_sum;
END$$


# 11.Calculating Interest
DELIMITER $$
CREATE PROCEDURE usp_calculate_future_value_for_account(id INT, rate DECIMAL(19,4))
BEGIN 
	SELECT a.id as 'account_id', 
    ah.first_name, 
    ah.last_name, 
    a.balance as 'current_balance',
	usp_calculate_future_value_for_account(a.balance, rate, 5) as 'balance_in_5_years' 
    FROM account_holders as ah
	LEFT JOIN accounts as a ON a.account_holder_id = ah.id
    WHERE a.id = id;
END$$


# 12.Deposit Money
DELIMITER $$
CREATE PROCEDURE usp_deposit_money(account_id INT, money_amount DECIMAL(19, 4))
BEGIN 
	START TRANSACTION;
	IF money_amount <= 0 THEN ROLLBACK;
    
	UPDATE `accounts` SET balance = balance + money_amount
	WHERE id = account_id;
	COMMIT;
    END IF;
END$$
