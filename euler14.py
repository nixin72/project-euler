#!/usr/bin/python3.4
def next(num):
    tmp = [num]
    while tmp[len(tmp)-1] != 1:
        curr = tmp[len(tmp)-1]
        if curr % 2 == 0:
            tmp.append(int(curr/2))
        else:
            tmp.append(int((curr*3) + 1))
    return tmp

def calc(num):
    lg = []
    for x in range(1, num+1):
        chain = next(x)
        if len(chain) > len(lg):
            lg = chain
    return lg[0]

print(calc(1000000))
