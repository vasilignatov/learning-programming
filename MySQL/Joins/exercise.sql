#1.	Employee Address
SELECT 
	e.employee_id, 
	e.job_title,
	e.address_id,
	a.address_text
FROM employees as e
JOIN addresses as a
ON	e.address_id = a.address_id
ORDER BY address_id
LIMIT 5;

#2.	Addresses with Towns
SELECT 
	e.first_name,
	e.last_name,
	t.name AS 'town',
	a.address_text
FROM employees as e
JOIN addresses as a ON e.address_id = a.address_id
JOIN towns as t ON a.town_id = t.town_id
ORDER BY first_name, last_name
LIMIT 5;


#3.	Sales Employee
SELECT 
	e.employee_id,
	e.first_name,
	e.last_name,
	d.name as 'department_name'
FROM employees as e
JOIN departments as d ON e.department_id = d.department_id
WHERE d.name = 'Sales'
ORDER BY e.employee_id DESC;


#4.	Employee Departments
SELECT 
	e.employee_id,
	e.first_name,
	e.salary,
	d.name as 'department_name'
FROM employees as e
JOIN departments as d ON e.department_id = d.department_id
WHERE salary > 15000
ORDER BY e.department_id DESC
LIMIT 5;


#5.	Employees Without Project
SELECT 
	e.employee_id,
	e.first_name
FROM employees as e
LEFT JOIN employees_projects as ep ON e.employee_id = ep.employee_id
WHERE ep.employee_id IS NULL
ORDER BY e.employee_id DESC
LIMIT 3;


#6.	Employees Hired After
SELECT
	e.first_name,
	e.last_name,
	e.hire_date,
	d.name as 'dept_name'
FROM employees as e
JOIN departments as d ON d.department_id = e.department_id
WHERE DATE(hire_date)> '1999-1-1'
ORDER BY hire_date


#7.	Employees with Project
#8.	Employee 24
#9.	Employee Manager
#10.Employee Summary
#11.Min Average Salary
#12.Highest Peaks in Bulgaria
#13.Count Mountain Ranges
#14.Countries with Rivers
#15.*Continents and Currencies
#16.Countries Without Any Mountains
#17.Highest Peak and Longest River by 
