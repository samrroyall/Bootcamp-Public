import random
def randInt(min=0,max=100):
    assert isinstance(min, int) and isinstance(max, int), \
        "max and min must be integers"
    assert max > 0, "max must be a positive number"
    assert max > min, "max must be a greater than min"
    percent = random.random()
    randNum = percent * (max - min) + min
    return round(randNum)
