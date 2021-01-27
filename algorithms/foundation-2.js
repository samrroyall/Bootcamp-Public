function one(array) {
  for (var i = 0; i < array.length; i++) { 
    if (array[i] > 0) { 
      array[i] = "big";
    }
  }
  return array;
}

function two(array) {
  var min = array[0];
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log(min);
  return max;
}

function three(array) {
  console.log(array[array.length - 2]);
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {
      return array[i];
    }
  }
}

function four(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i] * 2);
  }
  return newArr;
} 

function five(array) {
  var numPos = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      numPos++;
    }
  }
  array[array.length - 1] = numPos;
  return array;
}

function six(array) {
  var numEvens = 0;
  var numOdds = 0;
  if (array[0] % 2 == 0) {
    numEvens++;
  } else {
    numOdds++;
  }
  for (var i = 1; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      if (array[i-1] % 2 == 0) {
        numEvens++;
        if (numEvens >= 3) {
          console.log("Even more so!");
        }
      } else {
        numEvens = 1;
        numOdds = 0;
      }
    } else {
      if (array[i-1] % 2 == 1) {
        numOdds++;
        if (numOdds >= 3) {
          console.log("That's odd!");
        }
      } else {
        numOdds = 1;
        numEvens = 0;
      }
    }
  }
}

function seven(array) {
  for (var i = 0; i < array.length; i++) {
    if (i % 2 == 1) {
      array[i] += 1;
    }
    console.log(array[i]);
  }
  return array;
}

function eight(array) {
  for (var i = array.length - 1; i > 0; i--) {
    array[i] = array[i-1].length;
  }
  return array;
}

function nine(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i] + 7);
  }
  return newArr;
}

function ten(array) {
  var mid = array.length / 2; 
  if (array.length % 2 == 1) {
    mid = Math.floor(mid);
  }
  for (var i = 0; i < mid; i++) {
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

function eleven(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArr.push(array[i] * -1);
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

function twelve(array) {
  hasFood = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == "food") {
      console.log("yummy");
      hasFood = true;
    }
  }
  if (!hasFood) {
    console.log("I'm hungry");
  }
}

function thirteen(array) {
  var mid = array.length / 2; 
  if (array.length % 2 == 1) {
    mid = Math.floor(mid);
  }
  for (var i = 0; i < mid; i++) {
    if (i % 2 == 0) {
      var temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }
  return array;
}

function fourteen(array, n) {
  for (var i = 0; i < array.length; i++) {
    array[i] *= n;
  }
  return array;
}
