import math

current_book_pages = int(input())
pages_per_hour = int(input())
days_for_book = int(input())

hours_per_book =math.floor(current_book_pages / pages_per_hour)
hours_per_day = hours_per_book / days_for_book

print(int(hours_per_day))