# String datatype in deteil

a = "Aaditya" # we can use double quote or single quote to specify string
b = "This shows how to use \" \" inside a string using escape sequence character"
c = '\nYou can go previous way or this way "" by using single quote to specify a string'
d = '''\nThis is the way
where we can write a multiline string
by specifying a string inside tripple single quote or tripple double quote'''
print(b, c, d)

# We can also iterate a string by indexing or by using loop as shown below
print("\nIterating a string like an array(using indexing)")
print(a[0])
print(a[1])
print(a[2])
print(a[3])
print(a[4])
print(a[5])
print(a[6])

# using for loop
print("\nIterating string using for loop")
for i in a:
    print(i)

# String slicing
print("\nString slicing")
x = "Jerry"
print(x[0:2]) # Here 0 is inclusive but 2 is exclusive
print(x[:2])  # This is same as above means if we do not specify value python consider is as terminal
print(x[3:])  # This will print from third index till the end
# Negative indexing
print(x[-4:-1])
print(x[len(x)-4:len(x)-1]) # This is same as above