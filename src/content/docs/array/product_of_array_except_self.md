---
title: product of array except self
description: array, medium, prefix sum
---
#array, #medium, #prefixsum, [link to problem ↗ ](https://leetcode.com/problems/product-of-array-except-self/)

### thinking
we calculate the prefix then the suffix, multiply them together we get the answer

### my optimal solution (O(n) space)
```python
def productExceptSelf(self, nums: List[int]) -> List[int]:
    prefix = []
    suffix = []
    final = []
    n = len(nums)

    prefix.append(1)
    for i in range(1,n):
        prefix.append(nums[i-1]*prefix[i-1])
    
    nums.reverse()
    suffix.append(1)
    for i in range(1,n):
        suffix.append(nums[i-1]*suffix[i-1])
    suffix.reverse()

    for i in range(0,n):
        final.append(prefix[i]*suffix[i])
    
    return final
```

### gold standard solution (O(1) follow up)
```python
def productExceptSelf(self, nums: List[int]) -> List[int]:
    final = []
    n = len(nums)

    final.append(1)
    for i in range(1,n):
        final.append(nums[i-1]*final[i-1]) #prefix

    suffix = 1
    for i in range(n-1, -1, -1): #go reverse for suffix
        final[i] *= suffix
        suffix *= nums[i]
    
    return final
```