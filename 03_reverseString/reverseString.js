const reverseString = function(string) {
    let splitString = string.split("")
    splitString = splitString.reverse().toString()
    return splitString.replace(/,/g, "")
};

// Do not edit below this line
module.exports = reverseString;
