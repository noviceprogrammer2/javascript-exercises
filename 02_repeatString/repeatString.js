const repeatString = function(string,num) {
    newstring = ''; //creates empty string
    if (num<0){
        newstring = 'ERROR'; //returns error for negative num values 
    }
    else{
        for (let i = 0; i < num; i++){ 
            newstring = newstring + string;  //adds value to newstring
        }
    }
    return newstring // once loops are finished
}

// Do not edit below this line
module.exports = repeatString;
