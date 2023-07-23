pens_packs = int(input())
markers_packs = int(input())
cleaner_litters = int(input())
discount = int(input())

price = (pens_packs * 5.8) + (markers_packs * 7.2) + (cleaner_litters * 1.2)
result = price - (price * discount / 100)

print(result)