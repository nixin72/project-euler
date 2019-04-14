#!/usr/bin/python3.4
import math

def fac(num):
    return [i for i in range(1, (num//2)+1) if num%i == 0]

def ami(num):
    num2 = sum(fac(num))
    return num == sum(fac(num2)) and num != num2
 
sum1 = 0
for x in range(0, 10000, 2): sum1 += x if ami(x) else 0

print(sum1)
