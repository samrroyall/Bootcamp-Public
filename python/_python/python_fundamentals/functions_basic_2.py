def countdown(num):
    return [i for i in range(num,-1,-1)]

def print_and_return(l):
    assert len(l) == 2, "input list must have length 2"
    assert isinstance(l[0], int), "first element in input list is not of type int"
    print(l[0])
    assert isinstance(l[1], int), "second element in input list is not of type int"
    return l[1]

def first_plus_length(l):
    assert len(l) > 0, "input list must have at least one element"
    return l[0] + len(l)

def values_greater_than_second(l):
    if len(l) < 2:
        return False

    newList = []
    for n in l:
        if n > l[1]:
            newList.append(n)
    return newList
    
def length_and_value(size, value):
    assert isinstance(size, int), "size argument must be an integer"
    assert isinstance(value, int), "value argument must be an integer"
    return [ value ] * size
