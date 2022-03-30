import numpy as np

# Linear probing program in python


class Hash_table():

    def __init__(self, size):
        self.size = size
        self.hashtable = np.array([None]*self.size)

    def hash(self, key):

        # Hash function h(x) = x%10
        index = key % 10

        if self.hashtable[index] == None:
            return index
        else:

            # Implementing linear probing
            while self.hashtable[index] != None:
                index = (index+1) % 10

            return index

    def insert(self, key):

        index = self.hash(key)
        self.hashtable[index] = key

    def search(self, key):

        index = key % 10

        if self.hashtable[index] != key:
            while self.hashtable[index] != key and self.hashtable[index] != None:
                index = (index+1) % 10

        if self.hashtable[index] == key:
            return index
        else:
            return None

    def print_hashtable(self):

        print("Hash table is :-\n\nindex \t value")
        for x in range(len(self.hashtable)):
            print(x, "\t", self.hashtable[x])


# Initializing hash table of size 10
HT = Hash_table(10)

# Inserting values
HT.insert(1049632924)
HT.insert(9078816219)
HT.insert(2519871653)
HT.insert(5185135645)
HT.insert(3588703521)
HT.insert(2797641051)
HT.insert(1781742203)
HT.insert(2291863410)

HT.print_hashtable()

index = HT.search(3588703521)

if index != None:
    print("\nGiven key is present at index", index)
else:
    print("\nGiven key is not present in the hash table")
