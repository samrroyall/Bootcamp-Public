Change is inevitable (especially when breaking a twenty). 
Make generateCoinChange(cents). Accept a number of American cents, 
compute and print how to represent that amount with smallest number of coins. 
Common American coins are pennies (1 cent), 9 nickels (5 cents), dimes (10 cents), 
and quarters (25 cents).

var obj = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4
}
obj["a"]
obj["b"]
obj["c"]
obj["d"]

obj.a
obj.b
obj.c
obj.d

var arr = [1,2,3,4]
arr[0]
arr[1]
arr[2]
arr[3]



function generateCoinChange(cents) {
    var coins = {
        quarter: 0,
        dime: 0,
        nickle: 0,
        pennie: 0
    };
    while (cents > 0) {
        if (cents >= 25) {
            coins.quarter++;
            cents -= 25;
        } else if (cents >= 10) {
            coins.dime++;
            cents -= 10;
        } else if (cents >= 5) {
            coins.nickle++;
            cents -= 5;
        } else {
            coins.pennie++;
            cents -= 1;
        }
    }
    return coins;
}
// Sam Royall, Sean Johnson, Ronnie Purcell