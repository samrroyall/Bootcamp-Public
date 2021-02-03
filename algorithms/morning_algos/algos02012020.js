function printMaxOfArray(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
// Given an array, find and print its largest element.

function returnOddsArray1To255() {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr;
}
// Create an array with all the odd integers between 1 and 255 (inclusive)
// Sean Johnson, Skylar Rivas, Sam Royall