def optCost(freq, i, j):
    # Base cases
    if j < i:
        return 0
    if j == i:
        return freq[i]
    fsum = Sum(freq, i, j)
    Min = 10000000000
    for r in range(i, j + 1):
        cost = (optCost(freq, i, r - 1) + optCost(freq, r + 1, j))
        if cost < Min:
            Min = cost
    # Return minimum value
    return Min + fsum

def optimalSearchTree(keys, freq, n):
    return optCost(freq, 0, n - 1)

def Sum(freq, i, j):
    s = 0
    for k in range(i, j + 1):
        s += freq[k]
    return s

if __name__ == '__main__':
    keys = [3, 5, 4]
    freq = [3, 6, 3]
    n = len(keys)
    print("Cost of Optimal BST is", optimalSearchTree(keys, freq, n))
