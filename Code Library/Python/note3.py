# String datatype in deteil

a = "Aaditya" # we can use double quote or single quote to specify string
b = "This shows how to use \" \" inside a string using escape sequence character"
c = '\nYou can go previous way or this way "" by using single quote \'\' to specify a string' # We can use single quotes inside double quotes directly without using escape sequence character and vice versa.
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

# String methods
# The key point is that the string is immutable that is we cannot change a string but we can use it in any form according to our requirnment using methods
a = "Vishnu" # we can overwrite a variable in python
print(len(a)) # len gives the length of the string
print(a.upper()) # make all the character upper case, again this is another string it will not change the original string
print(a.lower()) # make all the character lower case
f = "example Of CapitaliZe() methoD"
print(f.capitalize()) # change first character of string to upper case and all the other character to lower case
e = "!!!This is amazing!!!"
print(e.rstrip("!")) # ignore the given character from the end of the string
print(e.replace("This", "It")) # replace the given slice of string with another given string
print(e.split(" ")) # convert the string into list and the items is taken from original string seprated with given character in this case it is space(" ") but again it will not affect the original string
print(e.center(50)) # change the length of all string to the given length by adding spaces to its start
print(e.count("This")) # count the number of occurences of the given string in the original string
print(e.find("is")) # find the index of the given string in original string if present
print(e.find("not")) # gives -1 if not present
print(e.index("is")) # gives the index of given string in original string if present
# print(e.index("not")) # if not gives error
print(e.startswith("!!!")) # check if original string starts with given string
print(e.endswith("!!!")) # check if original string ends with given string
print(e.swapcase()) # change characters form upper case to lower case and vise versa
g = "Alpha0Numeric"
print(g.isalnum()) # return a boolean whether the string is alphanumeric(A-Z, a-z and all the number but does not contain spaces and special character)
h = ("AlphaString")
print(h.isalpha()) # check whether the string is alpha(A-Z, a-z but does not contain number, spaces and special characters)
i = ("lowercasestring")
print(i.islower()) # check if the string contain only lower case character set
i = ("UPPERCASEONLY")
print(i.isupper()) # check if the string contain only lower case character set
j = "A\tnon\tprintable\tstatement"
print(j.isprintable()) # check if the string contain all the printable characters
k = '       '
print(k.isspace()) # check if the string has only spaces or tabs
l = "This Is A Title"
print(l.istitle()) # return true if first letter of all words is capital else return false
m = "this is now a title"
print(m.title()) # make the string a title