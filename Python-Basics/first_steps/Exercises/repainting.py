nylon = int(input())
paint = int(input())
thinner = int(input())
hours = int(input())

materials_price = ((nylon + 2) * 1.5) + (paint * 1.1 * 14.5) + (thinner * 5) + 0.4
work_price_per_hour = materials_price * 0.3

result = materials_price + (hours * work_price_per_hour)

print(result)