function parensValid1(input){
    var leftParens = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] == "(") {
            leftParens++;
        }
        else if (input[i] == ")") {
            if (leftParens == 0) {
                return false;
            } else {
                leftParens--;
            }
        }
    }
    return leftParens == 0;
}

function parensValid2(input){
    var stack = []
    for (var i = 0; i < input.length; i++) {
        if (input[i] == "(") {
            stack.push("(");
        } 
        else if (input[i] == ")") {
            if (stack.length == 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    return stack.length == 0;
}

function bracesValid(input) {
    var stack = []
    for (var i = 0; i < input.length; i++) {
        if (input[i] == "(" || input[i] == "[" || input[i] == "{" ) {
            stack.push(input[i]);
        } 

        else if (input[i] == ")" || input[i] == "]" || input[i] == "}" ) {
            if (stack.length == 0) {
                return false;
            } 
            else {
                // leftVersion, when given a right-something
                // returns the left version of that thing
                var leftVersion = {
                    ")": "(",
                    "]": "[",
                    "}": "{",
                }
                var lastChar = stack[stack.length-1];
                if (lastChar === leftVersion[input[i]]) {
                    stack.pop();
                } 
                else {
                    return false; 
                } 
            }
        }
    }
    return stack.length == 0;

}

// super bonus: pairsValid(input ...)
