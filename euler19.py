#!/usr/bin/python3.4
import datetime as d

s = 0
for year in range(1901, 2001):
    for month in range(1, 13):
        day = d.date(year, month, 1)
        if day.weekday() == 6:
            s += 1
print(s)
        
