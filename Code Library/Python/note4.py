a = int(input("Enter your age: "))

# Conditional operators(>, <, >=, <=, ==, !=)
print(a > 18)
print(a < 18)
print(a >= 18)
print(a <= 18)
print(a == 18)
print(a != 18)

# Conditional statements
    # if-else statement
if (a >= 18):
    print("You are eligible to drive") # space before this line is called indentation which is very imp in python which shows that we are writing this inside a block which is in this case an if block
    print("If you are ready")
else:
    print("You are not eligible to drive")
    print("Wait until you become 18")

    # elif statement
num = int(input("Enter an intiger value: "))
if (num < 0):
    print("Number is negative")
elif (num == 0):
    print("Number is zero")
else:
    print("Number is positive")

    # nested if statement
num = int(input("Enter an intiger value: "))
if (num < 0):
    print("Number is negative")
elif (num > 0):
    if (num % 9 == 0):
        print('This is special number')
    else:
        print("This is normal positive number")
else:
    print("Number is zero")

    # match case statement
num = int(input("Enter an intiger value: "))
match num:
    case 0:
        print("No discount")
    case 1:
        print("10% discount")
    case 2:
        print("30% discount")
    case _:
        print("Invalid amount")