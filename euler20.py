#!/usr/bin/python3.4

def fac(num):
    if num == 1:
        return 1
    else:
        return num * fac(num-1)

print(sum([int(i) for i in list(str(fac(100)))]))
