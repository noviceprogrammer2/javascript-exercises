const removeFromArray = function() {

//if value in array, remove value
//i = 1 to start after first index of input, first input is always an array 
for (let i = 1; i <= arguments.length ; i++){
    if (arguments[0].includes(arguments[i]) == true){
        index = arguments[0].indexOf(arguments[i]); //finds index of array value
        arguments[0].splice(index, 1); //splices array at value 

    }
}
return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
