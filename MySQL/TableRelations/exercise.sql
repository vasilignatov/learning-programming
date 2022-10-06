
#1.	One-To-One Relationship
CREATE TABLE `passports`(
	passport_id INT PRIMARY KEY AUTO_INCREMENT,
    passport_number VARCHAR(50) UNIQUE
);

INSERT INTO `passports`(passport_id, passport_number)
values (101, 'N34FG21B'),  
	(102, 'K65LO4R7'),
	(103, 'ZE657QP2');
    
CREATE TABLE `person` (
    person_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) UNIQUE,
    salary DECIMAL(9 , 2 ),
    passport_id INT UNIQUE,
    CONSTRAINT fk_person_passport FOREIGN KEY (`passport_id`)
        REFERENCES `passports` (`passport_id`)
);
    
INSERT INTO `passports`( first_name, salary, passport_id)
values ('Roberto', 43300.00, 102),  
	('Tom', 56100.00, 103),
	('Yana', 60200.00, 101);
    
    
#02. One-To-Many Relationship
CREATE DATABASE cars;

CREATE TABLE manufacturers (
	`manudacturer_id` INT PRIMARY KEY AUTO_INCREMENT,
	`name`VARCHAR(50) NOT NULL UNIQUE,
    `established_on` DATE
    );
    
INSERT INTO manufacturers (`name`, `established_on`)
VALUES 
	('BMW', '1916/01/03'),
	('Tesla', '2003/01/01'),
	('Lada', '1966/01/05');

CREATE TABLE models (
`model_id` INT PRIMARY KEY AUTO_INCREMENT, 
`name`VARCHAR(70) NOT NULL,
`manudacturer_id` INT,
CONSTRAINT fk
FOREIGN KEY (`manudacturer_id`)
REFERENCES manufacturers(`manudacturer_id`)
);

INSERT INTO manufacturers (`model_id`,`name`,`manudacturer_id`)
VALUES 
	(101),
	(102),
	(103),
	(104),
	(105),
	(106);
    
 




