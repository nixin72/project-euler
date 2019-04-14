#Euler 1
sum = 0;
for x in range(1, 1000):
	if not x%3 or not x%5:
		sum += x;	
print(sum);