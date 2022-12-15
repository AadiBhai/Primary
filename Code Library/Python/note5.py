# Loops

#For loop
a = "Iterate"
for i in a: # we can use this method for any iterable object
    print(i)
print(" ")

for j in range(5): # this is range function
    print(j) # this will print form 0 to 4 excluding 5
print(" ")

# range function can also be use as below two methods
for x in range(2, 8): # means including 2 but excluding 8
    print(x)
print(" ")

# format of range function is range(start:, end:, skip:)
for x in range(3, 15, 3): # this will include 3 exclude 15 and skip every 2 numbers as we specify 3 at skip position
    print(x)