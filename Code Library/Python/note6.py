# Functions
# In python we have built-in functions which we can use anytime anywhere by symply calling them and passing the required parameters and
# we also have user defined functions as follow

def mean2(a, b): # This is how we declare and define the function def is the keyword to declare the function 
    print((a + b )/ 2) # and obviously indentation is imp

x = float(input("Enter first number: "))
y = float(input("Enter second number: "))
mean2(x, y) # this is how we call the function

# if we don't want to define the function but only declare it then we use pass keyword as follow
def complex(a, b):
    pass # by doing this we can define the function anytime and anywhere in the code

# Function arguments
# There are 4 types of arguments
# 1. Default arguments
def fun1(c = 4, d = 6): # here we provided 4 and 6 as the default values of c and d hence these are default arguments
    return c + d # return statement is used to return the value of the expression back to the calling function
    return 5 # if we provide multiple return statements it only consider first one always

z = fun1() # here fun1 will consider the default values and execute
z = fun1(6) # here 6 is the value of c and default value of d is considered here to do the same for d we do as follows
z = fun1(d = 10)
print(z)

# 2. keyword arguments
# we provide the arguments with key = value while calling the function this way interpreter recognize the arguments by parameter name
z = fun1(d = 15, c = 15)
print(z)

# 3. required arguments
# if we are using n number of parameters in the function defination then it is necessary to pass n number of arguments to the function otherwise it will give error

# def sum3(c, d, e):
#     return c + d + e

# z = sum3(5, 9) # here number of arguments passed does not match the number of actual number of aurguments hence it will give error
# print(z)

# 4. variable-length arguments
# i) Arbitary arguments
def avarage(*numbers): # using * before parameter name will consider the parameter as tuple
    sum = 0
    for i in numbers:
        sum = sum + i
    print("Avarage of all numbers is ", sum/len(numbers))

avarage(5, 4, 3, 2, 1) # now we can pass any number of arguments

# ii) Keyword arbitary arguments
def myName(**name): # using ** before parameter name will consider the parameter as dictionary
    print("Hello, I am ", name["fname"], name["mname"], name["lname"]) # paraname["argument-name"] this is the syntax to define arguments

myName(fname = "Aaditya", mname = "Ganeshrao", lname = "Assalkar") # this is how we pass the arguments
