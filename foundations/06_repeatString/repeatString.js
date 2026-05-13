const repeatString = function(str, num) {
    //initialize an empty string to hold the result
    let result = "";
    for (let i = 0; i < num; i++) {
        result += str;
    }
    if (num < 0) {
        return "ERROR";
    }
return result;
}

// Do not edit below this line
module.exports = repeatString;
