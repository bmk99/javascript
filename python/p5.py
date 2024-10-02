# max of thea rray 
def maximum(lis):
    # max(lis)
    # print(max(lis))
    return max(lis)

    


print(maximum([1,24,15,634,1,1234,5]))


# 2.max of thea rray 
def maximum(lis):
    max =lis[0]
    for i in range(1,len(lis)):
        if(lis[i] > max):
            max = lis[i]
    return max
        
    


print(maximum([1,62342,15,532,1,2332,5]))



# 3
# max of thea rray 
def maximum(lis):
    # max(lis)
    # print(max(lis))
    lis.sort()
    return lis[len(lis)-1]

    


print(maximum([1,24,15,634,1,1234,5]))
