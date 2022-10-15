
CREATE SCHEMA prep1;
USE prep1;

CREATE TABLE countries(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL
);

CREATE TABLE towns(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,	
    country_id INT NOT NULL,
    CONSTRAINT fk_t_c
    FOREIGN KEY (country_id)
    REFERENCES countries(id)
);

CREATE TABLE stadiums(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,	
    capacity INT NOT NULL,
    town_id INT NOT NULL,
    CONSTRAINT fk_stadiums_towns
    FOREIGN KEY (town_id)
    REFERENCES towns(id)
);

CREATE TABLE teams(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,	
    established DATE NOT NULL,
    fan_base BIGINT(20) NOT NULL DEFAULT(0),
    stadium_id INT NOT NULL,
    CONSTRAINT fr_teams_stadiums
    FOREIGN KEY (stadium_id)
    REFERENCES stadiums(id)
);

CREATE TABLE skills_data(
	id INT PRIMARY KEY NOT NULL,
    dribbling INT DEFAULT(0),
    pace INT DEFAULT(0),
    passing INT DEFAULT(0),
    shooting INT DEFAULT(0),
    speed INT DEFAULT(0),
    strength INT DEFAULT(0)
);

CREATE TABLE coaches(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(10) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    salary DECIMAL(10,2) DEFAULT(0) NOT NULL,
    coach_level INT DEFAULT(0) NOT NULL
);

CREATE TABLE players(
	id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(10) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    age INT DEFAULT(0) NOT NULL,
    position CHAR(1) NOT NULL,
    salary DECIMAL(10,2) DEFAULT(0) NOT NULL,
    hire_date DATETIME,
    skills_data_id INT NOT NULL,
    team_id INT,
    CONSTRAINT fk_players_skills_data
    FOREIGN KEY (skills_data_id)
    REFERENCES skills_data(id),
    CONSTRAINT fk_players_teams
    FOREIGN KEY (team_id) 
    REFERENCES teams(id)
);

CREATE TABLE players_coaches(
	player_id INT,
    coach_id INT,
    CONSTRAINT fk_pc_players
    FOREIGN KEY (player_id)
    REFERENCES players(id),
	CONSTRAINT fk_pc_coaches
    FOREIGN KEY (coach_id)
    REFERENCES coaches(id)
);


#2. INSERT

INSERT INTO coaches(first_name, last_name, salary, coach_level) (
SELECT 
	p.first_name,
    p.last_name,
    (p.salary * 2) as salary,
    char_length(p.first_name) as coach_level
FROM players as p
WHERE p.age >= 45
);


# 3.	Update
UPDATE coaches as c
SET 
	c.coach_level = c.coach_level + 1
WHERE 
	c.id IN (SELECT coach_id FROM players_coaches)
    AND first_name LIKE 'A%';
    

# 4. Delete
DELETE FROM players 
WHERE age >= 45;

#5.	Players 
SELECT first_name, age, salary
FROM players
ORDER BY salary DESC;

#6. Young offense players without contract
SELECT 
	p.id,
	CONCAT(p.first_name, ' ', p.last_name) as full_name,
	p.age,
	p.position,
	p.hire_date
FROM players as p
WHERE 
	p.age < 23 AND 
	p.position = 'A' AND 
    hire_date IS NULL AND
    (SELECT strength FROM skills_data as sd
    WHERE sd.id = p.skills_data_id ) > 50
ORDER BY p.salary, p.age;


SELECT 
    p.id,
    CONCAT(p.first_name, ' ', p.last_name) AS full_name,
    p.age,
    p.position,
    p.hire_date
FROM
    players AS p
JOIN skills_data AS sd 
ON sd.id = p.skills_data_id
WHERE
    p.age < 23 AND 
    p.position = 'A' AND
	p.hire_date IS NULL AND
    sd.strength > 50
ORDER BY p.salary , p.age;


# 07. Detail info for all teams
SELECT 
	t.name as team_name,
	t.established,
 	t.fan_base,
    COUNT(p.id) AS players_count
FROM teams AS t
LEFT JOIN players AS p 
ON p.team_id = t.id
GROUP BY t.id 
ORDER BY players_count DESC, fan_base DESC;


# 8. The fastest player by towns
SELECT 
	MAX(sd.speed) as  max_speed,
    tw.name
FROM skills_data as sd
RIGHT JOIN players AS p ON sd.id = p.skills_data_id
RIGHT JOIN teams AS t ON t.id = p.team_id
JOIN stadiums AS s ON s.id = t.stadium_id
RIGHT JOIN towns AS tw ON tw.id = s.town_id
WHERE t.name != 'Devify'  
GROUP BY tw.id
ORDER BY max_speed DESC, tw.name;



#9
SELECT *
FROM countries;
#TO DO!!!



#10
DELIMITER $$
CREATE FUNCTION udf_stadium_players_count (stadium_name VARCHAR(30)) 
RETURNS INT
DETERMINISTIC
BEGIN 
	RETURN(SELECT COUNT(p.id)
    FROM stadiums as s
    JOIN teams as t  ON s.id = t.stadium_id
    JOIN players as p ON t.id = p.team_id
    WHERE s.name = stadium_name
    );
END$$


#11
DELIMITER $$
CREATE PROCEDURE udp_find_playmaker(min_dribble_points INT, team_name VARCHAR(45))
BEGIN
	SELECT * FROM 
END$$







