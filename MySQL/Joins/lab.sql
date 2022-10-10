#exampple
CREATE DATABASE `test`;

CREATE TABLE `students` (
	id int primary key auto_increment,
    name VARCHAR(50),
    course_id INT,
    CONSTRAINT fk_stud_courses
    FOREIGN KEY (course_id)
    REFERENCES courses(id)
);

CREATE TABLE `courses`(
		id int primary key auto_increment,
        name VARCHAR(35)
);

INSERT INTO courses(name) VALUES
	('MySQL'), 
	('JAVA'),
    ('JS');
    
    
SELECT * FROM students
RIGHT JOIN courses
ON students.id = courses.id;


# 1.Managers
SELECT 
	d.`manager_id` AS 'employee_id', 
    CONCAT(e.`first_name`, ' ', e.`last_name`) AS 'full_name', 
    d.`department_id`, 
    d.`name` AS `department_name`
FROM
    departments AS d
        JOIN
    employees AS e ON d.manager_id = e.employee_id
ORDER BY e.employee_id
LIMIT 5;


#2. Towns and Addresses
SELECT 
	t.town_id,
    t.name AS 'town_name',
    a.address_text
FROM addresses AS a
RIGHT JOIN towns as t
ON a.town_id = t.town_id
WHERE t.name IN('San Francisco', 'Sofia', 'Carnation')
ORDER BY t.town_id, a.address_id;


#3. Employees Without Managers
# Write a query to get information about employee_id, first_name, last_name, department_id and salary 
# for all employees who don't have a manager. 
SELECT 
	employee_id, 
    first_name, 
    last_name, 
    department_id,
    salary 
FROM
    employees
WHERE
    manager_id IS NULL;

# 4.High Salary
SELECT 
    COUNT(*) AS 'count'
FROM
    employees AS e
WHERE
    e.salary > (SELECT 
            AVG(e1.salary)
        FROM
            employees as e1);
