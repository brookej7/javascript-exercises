const repeatString = function(word, numRepeats) {
    let repeatedWord = "";
    for (let i = 1; i <= numRepeats; i++) {
        repeatedWord = repeatedWord + word;
    }

    if (numRepeats < 0) {
        repeatedWord = "ERROR";
    } 

    return repeatedWord;

};

// Do not edit below this line
module.exports = repeatString;
