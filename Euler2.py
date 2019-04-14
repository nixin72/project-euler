#Euler 2
def fibonacci(num1, num2, sum):
	if num2 > 4000000:
		return sum;
	
	if num2%2 == 0:
		return fibonacci(num2, (num1+num2), (sum+num2));
	else:
		return fibonacci(num2, (num1+num2), sum);
	
print(fibonacci(1,2,0));