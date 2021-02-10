import math
import unittest

# reverseList

def reverseList(l):
    midpoint = math.floor(len(l)/2)
    for i in range(midpoint):
        temp = l[i]
        l[i] = l[len(l)-1-i]
        l[len(l)-1-i] = temp
    return l

class reverseListTests(unittest.TestCase):
    def testOne(self):
        self.assertEqual(reverseList([]), [])

    def testTwo(self):
        self.assertEqual(reverseList([1,2,3]), [3,2,1])

    def testThree(self):
        self.assertEqual(reverseList([1,2,3,4]), [4,3,2,1])

# isPalindrome

def isPalindrome(s):
    midpoint = math.floor(len(s)/2)
    for i in range(midpoint):
        if s[i] != s[len(s)-1-i]:
            return False
    return True

class isPalindromeTests(unittest.TestCase):
    def testOne(self):
        self.assertTrue(isPalindrome(""))

    def testTwo(self):
        self.assertTrue(isPalindrome("racecar"))

    def testThree(self):
        self.assertTrue(isPalindrome("tacocat"))

    def testFour(self):
        self.assertFalse(isPalindrome("taco"))

    def testFive(self):
        self.assertTrue(isPalindrome("a"))

# coins

def coins(amount):
    change = [0, 0, 0, 0] 
    while amount > 0: 
        if amount >= 25:
            amount -= 25
            change[0] += 1
        elif amount >= 10:
            amount -= 10 
            change[1] += 1
        elif amount >= 5:
            amount -= 5
            change[2] += 1
        else:
            amount -= 1 
            change[3] += 1
    return change

class coinsTests(unittest.TestCase):
    def testOne(self):
        self.assertEqual(coins(87), [3,1,0,2])

    def testTwo(self):
        self.assertEqual(coins(90), [3,1,1,0])

    def testThree(self):
        self.assertEqual(coins(26), [1,0,0,1])

    def testFour(self):
        self.assertEqual(coins(0), [0,0,0,0])

    def testFive(self):
        self.assertEqual(coins(10), [0,1,0,0])

# factorial

factorial_dict = {0: 0, 1: 1}

def factorial(n):
    if n not in factorial_dict:
        factorial_dict[n] = factorial(n-1)*n 
    return factorial_dict[n]

class factorialTests(unittest.TestCase):
    def testOne(self):
        self.assertEqual(factorial(5), 120)

    def testTwo(self):
        self.assertEqual(factorial(4), 24)

    def testThree(self):
        self.assertEqual(factorial(10), 3628800)

    def testFour(self):
        self.assertEqual(factorial(2), 2)

# fibonacci
fibonacci_dict = {0: 0, 1: 1}

def fibonacci(n):
    if n not in fibonacci_dict:
        fibonacci_dict[n] = fibonacci(n-2) + fibonacci(n-1)
    return fibonacci_dict[n]

class fibonacciTests(unittest.TestCase):
    def testOne(self):
        self.assertEqual(fibonacci(5), 5)

    def testTwo(self):
        self.assertEqual(fibonacci(6), 8)

    def testThree(self):
        self.assertEqual(fibonacci(7), 13)

    def testFour(self):
        self.assertEqual(fibonacci(8), 21)

if __name__  == "__main__":
    unittest.main()
