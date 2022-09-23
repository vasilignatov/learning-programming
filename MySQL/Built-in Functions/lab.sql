#task 1
SELECT `title` 
FROM `books`
WHERE SUBSTRING(`title`, 1, 3) = 'The';