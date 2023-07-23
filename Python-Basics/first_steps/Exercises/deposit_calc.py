deposit = float(input())
period = int(input())
GLP = float(input())

interest = deposit * GLP / 100
interest_per_month = interest / 12
result = deposit * period * interest_per_month


print(deposit + period * interest_per_month)

