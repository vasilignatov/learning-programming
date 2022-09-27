#task 1
SELECT `title` 
FROM `books`
WHERE SUBSTRING(`title`, 1, 3) = 'The';

#task 2 
SELECT REPLACE(`title`, 'The', '***') as "title"
FROM `books`
WHERE substring(`title`, 1, 3) = 'The';

#task 3
SELECT round(sum(`cost`),2)
FROM `books`;

#task 4
SELECT 
	CONCAT_WS(' ', `first_name`, `last_name`) AS 'Full Name',
	TIMESTAMPDIFF(DAY, `born`, `died`) AS 'Days Lived'
FROM `authors`;

#task 5
SELECT `title` 
FROM `books`
WHERE `title` LIKE 'harry potter%'

SELECT `title` 
FROM `books`
WHERE `title` LIKE '^The [a-z]+'
