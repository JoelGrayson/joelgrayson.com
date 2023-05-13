#found this video:
# https://youtu.be/VuXbEb5ywrU

#also this:
# https://en.wikipedia.org/wiki/Bucket_sort#:~:text=Bucket%20sort%2C%20or%20bin%20sort,applying%20the%20bucket%20sorting%20algorithm.
"""
BUCKET SORT

Runtime:
best case: O(N)
  - items of the same magnitude (uniformly distributed lists)

average: O(N)

worst case: O(N^2) 
  - bad list [.1, 1, 1O, 1OO, 1OOO]
  - this is our weakness

Storage: O(N)

Like merge_sort because it has a divide-and-conquer philosohy
Also uses insertion sort sometimes 


Pseudocode:
  It sees what the first digit is
  Puts it in correct bucket
  Then it does insertion sort within the buckets
    * it could also just call bucket sort recursively
  then it adds all of the buckets together

"""

def insertion_sort(lst):#O(25)--> bc must be under len(5)--> O(1)
  for i in range(1, len(lst)): #first index is already sorted
    current=lst[i]
    j=i #index for comparison
    while lst[j-1]>current and j>0:  #shift over j-1 -right-> j while before is greater & not last item
      lst[j]=lst[j-1]
      j-=1
    
    lst[j]=current
  return lst

def bucket_sort(lst): #O(N^2)
  #base case:
  if len(lst)<=1:
    return lst
  
  
  min_num, max_num=min(lst), max(lst) #finds min and max O(N)

  #constants O(N) to find min/max
  num_buckets=len(lst)//10+3 #number of buckets based on length of list. minimum of 3
  recursion_limit=5 #if below recursion_limit, insertion_sort; if above recursion_limit, bucket_sort

  interval=(max_num-min_num)/num_buckets

  #1. creating buckets O(N)
  buckets=[[] for i in range(num_buckets)] #array of num_bucket arrays

  #2. Add numbers to buckets O(N)
  for num in lst:
    if min_num==max_num: #interval is infinity
      return lst #already sorted

    bucket_index=int((num-min_num)//interval) #calculate index
    if num==max_num: #if largest number
      bucket_index=-1
    buckets[bucket_index].append(num) #add to correct bucket

  #3. Sort buckets O(N) or O(N^2) based on worst case
  for i, bucket in enumerate(buckets):
    if len(bucket)>recursion_limit:
      buckets[i]=bucket_sort(bucket) #O(N)
    else:
      buckets[i]=insertion_sort(bucket) #O(25)

  #4. Combine buckets O(N)
  accumulator=[] #array of combined items
  for bucket in buckets:
    for item in bucket:
      accumulator.append(item)
  return accumulator

def test():
  import numpy as np
  reverse = np.arange(10, 0, -1)#testing a reversed lst
  neg = np.arange(1000,-1000, -1)#testing negatives

  lst=[2, 1, 4, 8, 0, -30]

  #lst=bucket_sort(lst)
  #print(bucket_sort(reverse))
  #print(bucket_sort(neg))
  #print(bucket_sort([-3, -100.392, 2.3, 0]))
  print(bucket_sort([]))

#Testing
if __name__=='__main__':
  test()