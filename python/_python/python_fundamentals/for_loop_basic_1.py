# print all integers from 0-150
for i in range(151):
    print(i)
# multiples of 5 from 5-1000
for i in range(5,1001):
    if i % 5 == 0:
        print(i)
# print integers 1-100, if divisible by 5 
# print "Coding", if divisible by 10, print                                        
# "Dojo
for i in range(1,101):
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5 == 0:
        print("Coding")
    else:
        print(i)
# print the sum of the odd integers from 0 to 500,000
sum = 0
for i in range(500001):
    if (i % 2 == 1):
        sum += i
print(sum)
# print positive numbers starting at 2018, counting down by fours
i = 2018
while i > 0:
    print(i)
    i -= 4
# 
lowNum = 2
highNum = 9
mult = 3
for i in range(lowNum, highNum+1):
    if (i % mult == 0):
        print(i)
