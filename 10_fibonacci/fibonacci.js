const fibonacci = function (input) {
    correctedInput = parseInt(input); // turn input into integer 
    let fibonacciSequence = new Array() // creates empty fibonacci array
    if (correctedInput < 0) {
        return 'OOPS'
    }
    else {
        for (let i = 0; i < correctedInput; i++) {
            if (i == 0) {
                fibonacciSequence[i] = 1
            }
            else if (i == 1) {
                fibonacciSequence[i] = 1
            }
            else {
                fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]
            }
        } return fibonacciSequence[correctedInput-1]
        //fibonacci(input) = fibonacci(input-1) + fibonacci()
    }
};

// Do not edit below this line
module.exports = fibonacci;


