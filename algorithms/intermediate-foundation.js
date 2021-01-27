function sigma(n) {
  if (n == 1) {
    return 1;
  } else {
    return sigma(n-1) + n;
  }
}

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return factorial(n-1)*n;
  }
}

function fibonacci(n) {
  var fst = 0;
  var snd = 1;
  if (n == 0) {
    return fst;
  } else if (n == 1) {
    return snd;
  } else {
    var next = fst+snd;
    for (var i = 0; i < n-2; i++) {
      fst = snd;
      snd = next;
      next = fst + snd;
    }
    return next;
  }
}

function second_to_last(array) {
  if (array.length < 2) {
    return null;
  } else {
    return array[array.length - 2];
  }
}

function nth_to_last(array, n) {
  if (array.length < n) {
    return null;
  } else {
    return array[array.length - n];
  }
}

function second_largest(array) {
  if (array.length < 2) {
    return null;
  } else {
    var max = array[0];
    var second_max = null;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        second_max = max;
        max = array[i];
      }
    }
    return second_max;
  }
}

function double_trouble(array) {
  for (var i = 0; i < array.length; i += 2) {
    array = array.slice(0,i+1).concat([array[i]], array.slice(i+1,array.length));
  }
  return array;
}
