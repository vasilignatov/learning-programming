# 1. Mountains and Peaks
CREATE TABLE mountains(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL
);

CREATE TABLE peaks(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `mountain_id` INT NOT NULL,
    CONSTRAINT fk_peaks_mountains
    FOREIGN KEY (`mountain_id`)
    REFERENCES mountains(`id`)
);
CREATE TABLE mountains(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL
);

CREATE TABLE peaks(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `mountain_id` INT NOT NULL,
    CONSTRAINT fk_peaks_mountains
    FOREIGN KEY (`mountain_id`)
    REFERENCES mountains(`id`)
);

INSERT INTO peaks(`name`, `mountain_id`)
VALUES('Botev', 1 );

#2. Trip Organization
SELECT  
	v.driver_id,
    v.vehicle_type,
    concat(c.first_name, ' ', c.last_name) as 'driver_name'
FROM vehicles as v
JOIN campers as c
ON v.driver_id = c.id;

#3.	SoftUni Hiking
SELECT 
	r.`starting_point` as 'route_starting_point', 
	r.`end_point` as 'route_ending_point', 
    r.`leader_id`, 
    concat(c.first_name, ' ', c.last_name) as 'leader_name'
FROM `routes` as r
JOIN `campers` as c
ON	r.leader_id = r.id;

SELECT 
	r.`starting_point` as 'route_starting_point', 
	r.`end_point` as 'route_ending_point', 
    r.`leader_id`, 
    concat(c.first_name, ' ', c.last_name) as 'leader_name'
FROM `routes` as r, `campers` as c
WHERE r.leader_id = c.id;


#4.	Delete Mountains
DROP TABLE mountains;
DROP TABLE peaks;

CREATE TABLE mountains(
	`id` INT AUTO_INCREMENT PRIMARY KEY, 
    `name` VARCHAR(50) NOT NULL
);

CREATE TABLE peaks (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    `mountain_id` INT,
    CONSTRAINT fk_peaks_mountains FOREIGN KEY (mountain_id)
        REFERENCES mountains (id)
        ON DELETE CASCADE
);

INSERT INTO `mountains`(`name`) 
VALUES ('Rila'),
		('Pirin'),
		('Old Mountain'),
		('Vitosha');

INSERT INTO `peaks`(`name`, `mountain_id`) 
VALUES ('Cherni Vrah', 4),
		('Kutelo', 2),
		('Koncheto', 2),
		('Botev', 3);


SELECT * FROM peaks as p
JOIN mountains as m
ON p.mountain_id = m.id;

DELETE FROM `mountains` as m
WHERE m.`name` = 'pirin';

