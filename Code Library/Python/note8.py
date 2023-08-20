# Tuples
# Tuples are same as list, they are just immutable i.e. we cannot change value of tuple or tuple itself

tup = (2, 5, 85, "Blank", True) # we can store anything in tuple
print(type(tup), tup)
stup = (1,) # we need to use ',' if we want single valued tuple otherwise python will take it as a assigned value of written datatype
print(type(stup))
ftup = ("One") # this is not a tuple
print(type(ftup))
if 2 in tup: # we can use in operator in tuple
    print(True)

# We can do slicing just like list but it does not change the original tuple rather it make a new tuple like follow
tup2 = tup[2:3]
print(tup2)

# we can not make changes to tuple but still we can manipulate it as follow
# Manipulating Tuples
countries = ("Spain", "Italy", "India", "Germany", "France") # tuple created
temp = list(countries) # convert tuple into list
temp.append("Russia") # add item
temp.pop(1) # remove item
temp[0] = "England" # change item
countries = tuple(temp) # convert back list to tuple

# Tuple Methods
print(countries.count("India")) # count the number of occurances of element in tuple
tuple1 = (0, 2, 5, 3, 1, 6, 1, 5, 2, 3, 5)
print(tuple1.index(5)) # print the index of first occurance of element
print(tuple1.index(1, 2, 8)) # gives the index of 1 between range of 2 to 8
print(len(tuple1))