function zipArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return null;
    let result = {};
    for (let i = 0; i < arr1.length; i++) {
        result[ arr1[i] ] = arr2[i];
    }
    return result;
}
// console.log("[1,2,3], ['one', 'two', 'three']");
// console.log(zipArrays([1,2,3], ["one", "two", "three"]));

function invertHash(obj) {
    let newObj = {};
    for (let item of Object.entries(obj)) {
        let [key, value] = item;
        newObj[value] = key;
    }
    return newObj;
}
// console.log("{'one': 1, 'two': 2, 'three': 3}");
// console.log(invertHash({'one': 1, 'two': 2, 'three': 3}));