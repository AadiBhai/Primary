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