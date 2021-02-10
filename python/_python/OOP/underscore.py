class Underscore:
    def map(self, iterable, callback):
        return [callback(i) for i in iterable]

    def filter(self, iterable, callback):
        return [i for i in iterable if callback(i)]

    def find(self, iterable, callback):
        for i in iterable:
            if callback(i):
                return i

    def reject(self, iterable, callback):
        return [i for i in iterable if not callback(i)]

# _ = Underscore()
# print(_.map([1,2,3], lambda x: x*2))
# print(_.find([1,2,3,4,5,6], lambda x: x>4))
# print(_.filter([1,2,3,4,5,6], lambda x: x%2 == 0))
# print(_.reject([1,2,3,4,5,6], lambda x: x%2 == 0))
