area = float(input())

greening_price = area * 7.61
discount = greening_price * 0.18
final_price = greening_price - discount

print(f'The final price is: {final_price} lv.')
print(f'The discount is: {discount} lv.')