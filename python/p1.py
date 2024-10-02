def swap(lis):
    a = lis[0]
    b = lis[len(lis)-1]
    lis[0] = b
    lis[len(lis)-1] = a



    return lis
res = swap([1,2,3,4,5])
print(res)



# app2
def swap(lis):
   lis[0],lis[len(lis)-1] = lis[len(lis)-1],lis[0]
   return lis
res = swap([3,4,52,21,1])
print(res)



#  check the tuple 
