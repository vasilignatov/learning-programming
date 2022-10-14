
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
