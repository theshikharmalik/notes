---
title: insert interval
description: array, medium
---
#array, #medium, [link to problem ↗ ](https://leetcode.com/problems/insert-interval/)

### thinking
problem will be divided into three loops:
- append the non overlappers
- find the overlappers
- append the remaining 

### solution
```python
def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
    finalIntervals = []
    i = 0
    n = len(intervals)

    # intervals empty
    if not intervals:
        return [newInterval]
    
    #loop1
    while i < n and intervals[i][1] < newInterval[0]:
        finalIntervals.append(intervals[i])
        i += 1
    
    #loop2
    while i < n and intervals[i][0] <= newInterval[1]:
        newInterval[0] = min(intervals[i][0], newInterval[0])
        newInterval[1] = max(intervals[i][1], newInterval[1])
        i += 1
    
    finalIntervals.append(newInterval)

    #loop3
    while i<n:
        finalIntervals.append(intervals[i])
        i += 1

    return finalIntervals
```