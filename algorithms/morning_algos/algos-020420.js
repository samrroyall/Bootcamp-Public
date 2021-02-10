// functions from 02/03
function rollOne() {
    return Math.floor(Math.random() * 6 + 1);
}
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
// Fourth, make a copy of playStatistics and add code to make playStatistics2(), 
// so that at the end (in addition to printing high/low rolls), it also prints the 
// total sum of all eight rolls.
function playStatistics2() {
    var max = 0;
    var min = 7;
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        var roll = rollOne();
        sum += roll;
        if (roll < min) {
            min = roll;
        } else if (roll > max) {
            max = roll;
        }
    }
    console.log("min: ", min);
    console.log("max: ", max);
    console.log("sum: ", sum);
}

// Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), 
// so that it will roll as many times as you want, instead of always doing this eight times.
function playStatistics3(num) {
    var max = 0;
    var min = 7;
    var sum = 0;
    for (var i = 0; i < num; i++) {
        var roll = rollOne();
        sum += roll;
        if (roll < min) {
            min = roll;
        } else if (roll > max) {
            max = roll;
        }
    }
    console.log("min: ", min);
    console.log("max: ", max);
    console.log("sum: ", sum);
}

// Finally, make a copy of playStatistics3 and change it to create playStatistics4(num), 
// so that at the end instead of the total sum, it prints the average roll.
function playStatistics4(num) {
    var max = 0;
    var min = 7;
    var sum = 0;
    for (var i = 0; i < num; i++) {
        var roll = rollOne();
        sum += roll;
        if (roll < min) {
            min = roll;
        } else if (roll > max) {
            max = roll;
        }
    }
    console.log("min: ", min);
    console.log("max: ", max);
    console.log("avg: ", sum/num);
}