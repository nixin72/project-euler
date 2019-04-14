#!/usr/bin/python3.4

#THIS NEEDS TO BE RE-WRITTEN!!! IT'S JUNK
x = 1
while True:
    tri = x * (x+1)/2
    if tri > 1 and all(tri%i for i in range(1, int(tri/2), 2)):
        print(tri)
        break
    x += 1
