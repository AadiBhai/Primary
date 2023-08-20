# List datatype
li = [3, 8, 89, 4.5, "Word", True] # list can contain different datatypes and it is iterable
print(li)
print(li[0])
print(li[1])
print(li[5])
# we can also use negative indexing like
print(li[-2])
print(li[:-1])
print(li[1:-2])
print(li[0:5:2])

# we can also check if list contain specific element by using in keyword in if statement
if True in li: # datatype of element should also match
    print("Yes")
else:
    print("No")

# List comprehension
lst = [i*i for i in range(8)]
print(lst)
print(type(lst))
# here we can also use if statements
lst = [i*i for i in range(10) if i%2==0]
print(lst)

# list methods
l = [15, 1, 57, 5, 3]
print(l)
l.append(4) # append element to the list
print(l)
l.sort() # sort the list in ascending order
print(l)
l.sort(reverse=True) # sort the list in decending order
print(l)
print(l.index(1)) # print the index of the element
print(l.count(1)) # count the occurances of the element
m = l.copy() # copy the list 
m[0] = 0 # assigning different value to the index
print(m)
j = l # taking j as referance of l(j is not new list)
j[0] = 888
print(l)
l.insert(1, 90) # insert element to specified index
print(l)
n = [54, 64, 98]
k = l + n # concatinating two list as new list
print(k)
l.extend(n) # appends list n to list l
print(l)