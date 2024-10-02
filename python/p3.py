#  armstrong number 

# 153 = 1*1*1 + 5*5*5 + 3*3*3

#  app1

def myfunction(num):
    rem = 0 
    n = num
    sum =0
    p = len(str(n))
    while(n!=0):
        rem = n%10 
        sum = pow(rem,p) +sum 
        # n = int(n/10)
        n = n //10
    return True if(num ==sum) else False
print(myfunction(153))



#  app2

def myfunction(num):
    sum = 0
    s = str(num)
    for digit in s:
        sum += int(digit) ** len(s)
    return True if(num ==sum) else False
print(myfunction(153))
