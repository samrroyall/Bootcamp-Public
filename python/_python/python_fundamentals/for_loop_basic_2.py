import math

def biggie_size(l):
    for i in range(len(l)):
        if isinstance(l[i], int) and l[i] > 0:
            l[i] = "big"
    return l

def count_positives(l):
    num_positives = 0
    for elem in l:    
        if isinstance(elem, int) and elem > 0:
            num_positives += 1
    l[-1] = num_positives
    return l

def sum_total(l):
    sum = 0
    for elem in l:
        sum += elem
    return sum

def average(l):
    if len(l) == 0:
        return False
    return sum_total(l)/len(l)

def length(l):
    return len(l)

def minimum(l):
    if len(l) == 0:
        return False
    min = l[0]
    for elem in l:
        min = elem if elem < min else min
    return min

def maximum(l):
    if len(l) == 0:
        return False
    max = l[0]
    for elem in l:
        max = elem if elem > max else max
    return max

def ultimate_analysis(l):
    d = {
        "sumTotal": sum_total(l),
        "average": average(l),
        "minimum": minimum(l),
        "maximum": maximum(l),
        "length": length(l)
    }
    return d

def reverse_list(l):
    midpoint = math.floor(len(l)/2)
    for i in range(midpoint):
        temp = l[i]
        l[i] = l[len(l)-i-1]
        l[len(l)-i-1] = temp
    return l

