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
WHERE DATE(e.hire_date) > '1999-01-01 00:00:00'
	AND d.`name` IN ('Sales','Finance')
ORDER BY hire_date;


#7.	Employees with Project
SELECT 
	e.employee_id,
	e.first_name,
	p.`name` as 'project_name'
FROM employees AS e
JOIN employees_projects as ep ON e.employee_id = ep.employee_id
JOIN projects as p ON ep.project_id = p.project_id
WHERE DATE(p.start_date) > '2002-08-13' 
	AND end_date IS NULL
ORDER BY e.first_name, p.name
LIMIT 5;


#8.	Employee 24
SELECT 
	e.employee_id,
	e.first_name,
    IF(YEAR(p.start_date) >= 2005, NULL, p.`name`)
	as 'project_name'
FROM employees AS e
JOIN employees_projects as ep ON e.employee_id = ep.employee_id
RIGHT JOIN projects as p ON ep.project_id = p.project_id
WHERE e.employee_id = 24 
ORDER BY e.first_name, p.name;


#9.	Employee Manager
SELECT 
    e.employee_id,
    e.first_name,
    e.manager_id,
    m.first_name AS manager_name
FROM
    employees AS e,
    employees AS m
WHERE
    e.manager_id = m.employee_id
        AND e.manager_id IN (3 , 7)
ORDER BY e.first_name;


#10.Employee Summary
SELECT 
    e.employee_id,
    CONCAT(e.first_name, ' ', e.last_name) as employee_name,
    CONCAT(m.first_name, ' ', m.last_name) AS manager_name,
    d.name as 'department_name'
FROM employees as e
JOIN employees as m ON e.manager_id = m.employee_id 
JOIN departments as d ON e.department_id = d.department_id
ORDER BY e.employee_id
LIMIT 5;


#11.Min Average Salary
SELECT 
		AVG(salary) as 'min_average_salary'
FROM 
	employees
GROUP BY department_id, 'min_average_salary'
ORDER BY `min_average_salary`
LIMIT 1;


#12.Highest Peaks in Bulgaria
SELECT
	mc.country_code,
	m.mountain_range,
	p.peak_name,
	p.elevation
FROM peaks as p 
JOIN mountains as m ON m.id = p.mountain_id
JOIN mountains_countries as mc ON mc.mountain_id = m.id
WHERE mc.country_code = 'BG' AND elevation >2835
ORDER BY elevation DESC



#13.Count Mountain Ranges
#14.Countries with Rivers
#15.*Continents and Currencies
#16.Countries Without Any Mountains
#17.Highest Peak and Longest River by 
