---
title: three sum
description: array, medium, two pointers, sorting
---
#array, #medium, #twopointers, #sorting, [link to problem ↗ ](https://leetcode.com/problems/3sum/)

### thinking
we will be using two pointers coming in from the opposite direction, fixing one number will make it a two sum problem.
since the index doesn't need to be preserved, just sort it.

### my optimal solution (using set) 
```python
def threeSum(self, nums: list[int]) -> list[list[int]]:
    myset = set()
    i = 0
    n = len(nums)
    nums = sorted(nums)

    while i < n-2:
        l = i+1
        r = n-1

        while l < r:
            val = nums[i] + nums[l] + nums[r]
            if val == 0:
                myset.add((nums[i], nums[l], nums[r])) #tuples
                l+=1
                r-=1
            elif val<0:
                l+=1
            else:
                r-=1
        i+=1
    
    triplets = []
    for val in myset:
        triplets.append(list(val)) #tuples to list

    return triplets
```

### gold standard solution(without set)
```python
def threeSum(self, nums: list[int]) -> list[list[int]]:
    triplets = []
    nums.sort()
    n=len(nums)

    for i in range(n-2):
        #skip duplicates for i
        if i>0 and nums[i]==nums[i-1]:
            continue
        
        l=i+1
        r=n-1

        while l<r:
            val = nums[i] + nums[l] + nums[r]

            if val == 0:
                triplets.append([nums[i], nums[l], nums[r]])
                l += 1
                r -= 1
                # skip duplicates for l
                while l<r and nums[l] == nums[l-1]:
                    l+=1
                # skip duplicates for r
                while l<r and nums[r] == nums[r+1]:
                    r-=1
            
            elif val<0:
                l+=1

            else:
                r-=1 
    
    return triplets
```

