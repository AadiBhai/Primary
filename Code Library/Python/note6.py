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