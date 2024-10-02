# 1. 
# to run the code open in terminal  .. check whether you are in python directory 
# run ` python p2.py`


num1 = input("enter the first number ")
num2 = input("enter the second number ")
print(int(num1)+int(num2))

principal = int(input("enter the principal -- "))
rate = int(input("enter the rate"))
period = int(input("enter the period"))

print(f"total interst is {principal * rate * period /100}")

print("-------")
# pow(base,expo)
print(pow(2,3)) 


amount = principal * (pow(1+rate/100,period))
compundInterst = amount -principal

# 2 
num1 = 3 
num2 = 235
print(f"maximum i s  --{max(num1,num2)}") # format string ` f"" `

# 3 factorial 
def factorial(num):
    res = 1
    for x in range(num):
        res = x *num
    return res
print(factorial(6))


#  armsstrong number 
