# reverse a array by left rotation num 
def rotate(arr,count,size):
    arr[:] = arr[count:size] + arr[0:count]
    return arr
    
print(rotate([1,2,3,4,5,6,7,8],3,8))


# 2 without using the slicing . 
def rotate(arr,count,size):
    nArr = []
    for i in range(count,size):
        nArr[i] = arr[i]
    


  
    
print(rotate([1,2,3,4,5,6,7,8],3,8))

