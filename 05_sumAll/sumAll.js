const sumAll = function (input1, input2) {
    sum = 0
    if (typeof (input1) == "string" || typeof (input2) == "string") {
        return "ERROR"
    }
    if (input1 < 0 || input2 < 0) {
        return "ERROR"
    }
    if (typeof (input1) == "number" && typeof (input2) == "number") {
        //for larger numbers first 
        if (input1 > input2) {
            for (let i = input1; i >= input2; i--) {
                sum = i + sum
            }
            return sum
        }
        // for larger numbers second 
        if (input1 < input2) {
            for (let i = input1; i <= input2; i++) {
                sum = i + sum
            }
            return sum
        }
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
