const reverseString = function(string) {
    let splitString = string.split("")
    splitString = splitString.reverse().toString()
    //could have used join which removes the , automatically
    return splitString.replace(/,/g, "")
};

// Do not edit below this line
module.exports = reverseString;
