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