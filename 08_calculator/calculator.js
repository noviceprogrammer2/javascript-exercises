const add = function (input1, input2) {
  let sum = input1 + input2;
  return sum;
};

const subtract = function (input1, input2) {
  var difference = input1 - input2;
  return difference;
};

const sum = function (input) {
  let sum = input.reduce((previousValue, currentValue) => previousValue + currentValue,
    0)
  return sum
};

const multiply = function (input) {
  return input.reduce((previousValue, currentValue) => previousValue * currentValue,
    1)
};

const power = function (input1, input2) {
  result = input1 ** input2
  return result
};

const factorial = function (input) {
  let total = 1
  if (input == 0 || input == 1) {
    return 1
  }
  else {
    for (i = 2; i <= input; i++) {
      total = total * i
    }
    return total
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
