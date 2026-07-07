---
title: best time to buy and sell stock
description: array, easy, two pointers
---
#array, #easy, #twopointers, [link to problem ↗ ](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

### thinking
we will be using two pointers both going in the same direction. 
if the diff is negative that means we found the new lowest number so we directly skip to it.  

### solution
```python
def maxProfit(self, prices: List[int]) -> int:
    l,r = 0,1
    maxP = 0

    while r < len(prices):
        if(prices[l] < prices[r]):
            profit = prices[r] - prices[l]
            maxP = max(maxP, profit)
        else:
            l=r
        r+=1
    
    return maxP
```

