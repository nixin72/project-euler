#!/usr/bin/python3.4
sieve = [True] * 2000000

def mark(sieve, x):
	for i in range(x+x, len(sieve), x):
		sieve[i] = False

for x in range(2, int(len(sieve) * 0.5) +1):
	if sieve[x]: mark(sieve, x)

print(sum(i for i in range(2, len(sieve)) if sieve[i]))
