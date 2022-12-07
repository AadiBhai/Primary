# Escape sequence character and comments
# This is comment

print("see you in the next line\n\"Jai Shree Ram\"") # Here \n and \" are escape sequence character
print(1, 3, 4+5, sep="    ", end="\n   ")
print("jadu")

# Data Types
a = 8             # int - represent intiger numbers, a popularly known data type
b = 3.14          # float - decimal numbers
c = True          # bool - boolean values like True and False (Note: T and F are capital letters(upper case))
d = None          # NoneType - literaly means none
e = "String"      # str - string are the iterable set of character/symbol, always written in double quote(" ")
f = complex(4, 3) # complex - unique datatype of python to use complex number

print("Type of a is ", type(a))
print("Type of b is ", type(b))
print("Type of c is ", type(c))
print("Type of d is ", type(d))
print("Type of e is ", type(e))
print("Type of f is ", type(f))

# Type casting
n = '5'
# n = 5 # one way to typecaste is to assign it a new value
m = '6'
print(n + m) # this will print 56
# another way to typecast is to use methods
print(int(n) + int(m)) # here int() is typecaste method, this is known as explicit typecasting
# list of typecasting methods
# int(), float(), str(), ord(), hex(), oct(), tuple(), dict(), etc

# Implicit TypeCasting
# In this type of typecasting, python interpreter itself convert the datatype
# This follows the order of datatypes like float has higher order than int
# example below
an = 2.178
on = 5
print(an + on)