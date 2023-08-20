# operators
a = float(input("Enter a number: "))
b = float(input("Enter another number: "))
print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a//b)
print(a%b)
print(a**b)
print(b**a)

# User Input
x = input("Enter your name: ") # input takes user input as a string but we can typecaste it as below
# x = int(input("Enter your age: ")) # This means x is str and also int at the same time and it will be an assignment means if you access this after this line it will consider x as int
y = int(input("Enter your age: "))
if(y >= 18):
    print("Welcome", x, "\nYou are eligible for Driving")
else:
    print("Welcome", x, "\nYou are not eligible for Driving")

m = input("Enter a number: ")
n = input("Enter a number: ")
print(m + n) # This will give you a string concatination
print(int(m) + int(n)) # This is typecasting and will give sum of two numbers, if string input provided then it will throw error
