const reverseString = function(string) {
    // creates array with string charcters as individual elements 
    let characters = string.split("");
    //reverses characters in the array 
    let reverseArray = characters.reverse();
    //joins characters in the array 
    let reverseString = reverseArray.join('');
    
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
