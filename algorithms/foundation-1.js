function one() {
  var array = [];
  for (var i = 1; i <= 255; i++) {
    array.push(i);
  }
  return array;
}

function two() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}

function three() {
  var sum = 0;
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  return sum;
}

function four(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function five(array) {
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function six(array) {
  var sum = four(array);
  return (sum / array.length);
}

function seven() {
  var newArr = []
  for (var i = 1; i <= 50; i++) {
    if (i % 2 == 1) {
      newArr.push(i);
    }
  }
  return newArr;
}

function eight(array, y) {
  var newArr = []; 
  for (var i = 0; i < array.length; i++) {
    if (array[i] > y) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

function nine(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] **= 2;
  }
  return array;
}

function ten(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 0;
    }
  }
  return array;
}

function eleven(array) {
  var newArr = [array[0], array[0], array[0]];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > newArr[0]) {
      newArr[0] = array[i];
    }
    if (array[i] < newArr[1]) {
      newArr[1] = array[i];
    }
    newArr[2] += array[i];
  }
  newArr[2] /= array.length;
  return newArr;
}

function twelve(array) {
  var temp = array[0];
  array[0] = array[array.length - 1]; 
  array[array.length - 1] = temp;
  return array;
}

function thirteen(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = "Dojo";
    }
  }
  return array;
}
