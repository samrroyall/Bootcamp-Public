// Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).

function rollOne() {
    return Math.floor(Math.random() * 6 + 1);
}

// Second, create a function playFives(num), which should call rollOne() multiple times – ‘num' times, 
// in fact, where 'num' is input parameter to playFives(num). Each time, it should print the value rollOne() 
// returns, and if that return value is 5, also print “That’s good luck!”

function playFives(num) {
    for (var i = 0; i < num; i++) {
        var roll = rollOne();
        console.log(roll);
        if (roll === 5) {
            console.log("That's good luck!");
        }
    }
}

// Third, create a new function named playStatistics(), which should call rollOne() eight times 
// (but not print anything after each call). After the last of these eight calls, it should print out the 
// lowest and highest values that it received from rollOne, among those eight calls.

function playStatistics() {
    var max = 0;
    var min = 7;
    for (var i = 0; i < 8; i++) {
        var roll = rollOne();
        if (roll < min) {
            min = roll;
        } else if (roll > max) {
            max = roll;
        }
    }
    console.log("min: ", min);
    console.log("max: ", max);
} 