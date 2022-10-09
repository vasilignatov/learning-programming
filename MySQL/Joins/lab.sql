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
