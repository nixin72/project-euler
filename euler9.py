#!/usr/bin/python3.4

for a in range(1, 1000):
	for b in range(1, 1000):
		c = 1000 - a - b
		if (a*a + b*b) == c*c: 
			print("a: " + str(a) + " b: " + str(b) + " c: " + str(c))
			print("product: " + str(a*b*c))
			break
