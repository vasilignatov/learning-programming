CREATE SCHEMA restaurant_db;
USE restaurant_db;

#DDL - TAKS 1
CREATE TABLE products(
	id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL UNIQUE,
    `type` VARCHAR(30) NOT NULL,
    `price` DECIMAL(10,2) NOT NULL
);

CREATE TABLE clients(
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birthdate DATE NOT NULL,
    card VARCHAR(50),
    review TEXT
);

CREATE TABLE `tables`(
	id INT PRIMARY KEY AUTO_INCREMENT,
    floor INT NOT NULL,
    reserved BOOLEAN,
    capacity INT NOT NULL
);
    

CREATE TABLE waiters (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(50),
    salary DECIMAL(10,2)
);
    
CREATE TABLE orders (
	id INT PRIMARY KEY AUTO_INCREMENT,
    table_id INT NOT NULL,
    waiter_id INT NOT NULL,
    order_time TIME NOT NULL,
    payed_status BOOLEAN,
    CONSTRAINT fk_orders_tables
    FOREIGN KEY (table_id)
    REFERENCES `tables`(id),
	CONSTRAINT fk_orders_waiters
    FOREIGN KEY (waiter_id)
    REFERENCES waiters(id)
);
    

CREATE TABLE orders_clients (
	order_id INT,
	client_id INT,
    CONSTRAINT fk_orders
    FOREIGN KEY (order_id)
    REFERENCES orders(id),
	CONSTRAINT fk_clients
    FOREIGN KEY (client_id)
    REFERENCES clients(id)
);

CREATE TABLE orders_products (
	order_id INT,
	product_id INT,
    CONSTRAINT fk_op_orders
    FOREIGN KEY (order_id)
    REFERENCES orders(id),
	CONSTRAINT fk_op_products
    FOREIGN KEY (product_id)
    REFERENCES products(id)
);

#Section CRUD
#02. Insert
INSERT INTO products(`name`, `type`, `price`) (
SELECT 
	CONCAT(w.last_name, ' ','specialty') as 'name',
    ('Cocktail') AS 'type',
	CEILING(w.salary * 0.01) as price
FROM waiters as w
WHERE w.id > 6
);


#03. Update
UPDATE orders as o
SET 
	o.table_id = o.table_id - 1
WHERE 
	o.id BETWEEN 12 AND 23;
    
    
# 04.Delete
DELETE FROM waiters as w
WHERE w.id NOT IN(
	SELECT waiter_id FROM orders as o
    WHERE w.id = o.waiter_id 
);


#Section 3: Querying 
#05.	Clients
SELECT
	*	
FROM clients
ORDER BY birthdate DESC, id DESC;


#06. Birthdate
SELECT
	first_name,
	last_name,
	birthdate,
	review
FROM clients 
WHERE card IS NULL
	AND YEAR(birthdate) BETWEEN 1978 AND 1993
ORDER BY last_name DESC, id ASC
LIMIT 5;


#07. Accounts
SELECT 
	CONCAT(last_name, first_name,LENGTH(first_name) ,'Restaurant') as username,
	reverse(SUBSTRING(email,2, 12)) as 'password'
FROM waiters
WHERE salary is NOT NULL
ORDER BY `password` DESC;


#08. Top from menu
SELECT 
	p.id,
    p.name,
    COUNT(o.id) as 'count'
FROM orders as o
LEFT JOIN orders_products as op ON o.id = op.order_id
LEFT JOIN products as p ON p.id = op.product_id

GROUP BY p.name
HAVING count >=5
ORDER BY count DESC, p.name ASC;

#09.	Availability
SELECT
	o.table_id,
	t.capacity,
 	COUNT(o.id) as 'count_clients',
	(case 
		when (t.capacity - COUNT(o.id)) < 0 THEN 'Extra seats' 
		when (COUNT(o.id) - t.capacity) = 0 THEN 'Full'
		else 'Free seats'
	end) as availability 
    FROM `tables` as t
LEFT JOIN orders as o ON t.id = o.table_id
LEFT JOIN orders_clients as oc ON oc.order_id = o.id
JOIN clients as c ON oc.client_id = c.id
WHERE t.floor = 1
GROUP BY o.table_id
ORDER BY o.table_id DESC;



#10. Extract bill
-- Silvio Blyth
DELIMITER $$
CREATE FUNCTION udf_client_bill(full_name VARCHAR(50))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN 
	RETURN(
		SELECT SUM(p.price) as 'total_price'
        FROM clients as c
        JOIN orders_clients as oc ON oc.client_id = c.id
        JOIN orders as o ON oc.order_id = o.id 
        JOIN orders_products as op ON o.id = op.order_id
        JOIN products as p ON p.id = op.product_id
        WHERE CONCAT(c.first_name, ' ', c.last_name) = full_name
	);
END$$


#11 
DELIMITER $$
CREATE PROCEDURE udp_happy_hour(`type` VARCHAR(50))
BEGIN 
	UPDATE products
    SET price = price * 0.8
    WHERE type = `type`
    AND price >= 10.00;
END$$



