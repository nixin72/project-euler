#!/usr/bin/python3.4
from math import sqrt
from itertools import count, islice

sum = 2

def isPrime(num):
	return num > 1 and all(num % x for x in islice(count(2), int(sqrt(num)-1)))

for x in range(1,2000000,2):
	if isPrime(x):
		sum += x

print(sum)
	
