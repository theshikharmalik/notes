---
title: two sum
description: array, easy, hashmap
---
#array, #easy, [link to problem ↗ ](https://leetcode.com/problems/two-sum/)

### thinking
we just cannot sort in this because we have to preserve the index, so instead we use hashmap.

### solution
```python
def twoSum(self, nums: List[int], target: int) -> List[int]:
    hashmap = {}
    for i in range (0, len(nums)):
        val = target - nums[i]

        if nums[i] in hashmap:
            return [hashmap[nums[i]], i]
        
        hashmap[val] = i
```
