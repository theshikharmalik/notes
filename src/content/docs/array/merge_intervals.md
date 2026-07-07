---
title: merge intervals
description: array, medium
---
#array, #medium, #sorting, [link to problem ↗ ](https://leetcode.com/problems/merge-intervals/)

### thinking
similar to insert intervals problem, we just have to sort it first.

### solution
```python
def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    finalIntervals = []
    intervals.sort()
    n = len(intervals)

    if n > 1 :
        finalIntervals.append(intervals[0])
    else:
        return intervals
    
    i=1
    j=0
    while i < n:
        if intervals[i][0] <= finalIntervals[j][1]:
            finalIntervals[j][0] = min(intervals[i][0], finalIntervals[j][0])
            finalIntervals[j][1] = max(intervals[i][1], finalIntervals[j][1])
            i+=1
        else:
            finalIntervals.append(intervals[i])
            j+=1

    return finalIntervals
```