const palindromes = function (input) {
    correctedString = input.toLowerCase().replace(/[^a-z]/g,''); //replaces input with a lowercase string with all special characters removed
    console.log(correctedString);
    reverseString = Array.from(correctedString).reverse().join(''); //creates a reversed string using the correctedstring

    // checks if palindrome
    if (reverseString == correctedString){
        return true
    }
    else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes; 


