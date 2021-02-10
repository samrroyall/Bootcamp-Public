x = [ [5,2,3], [10,8,9] ]
students = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney'],
}
z = [ {'x': 10, 'y': 20} ]

# Change the value 10 in x to 15.
x[1][0] = 15
# Change the last_name of the first student from 'Jordan' to 'Bryant'.
students[0]['last_name'] = 'Bryant'
# In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0] = 'Andres'
# Change the value 20 in z to 30
z[0]['y'] = 30

def iterateDictionary(some_list):
    for d in some_list:
        temp_str = ""
        for k, v in d.items():
            temp_str += f"{k} - {v}, "
        print(temp_str[:-2])

def iterateDictionary2(key_name, some_list):
    for d in some_list:
        assert key_name in d, \
            "a provided dictionary does not contain the provided key"
        print(d[key_name])

def printInfo(some_dict):
    for k, v in some_dict.items():
        assert isinstance(v, list), \
            "all dictionary values must be of type list"
        print(f"{len(v)} {k.upper()}")
        for elem in v:
            print(elem)
        print()


