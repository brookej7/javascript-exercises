const palindromes = function (word) {
    const lower = word.toLowerCase();
    const array = lower.split("")
    let filtered = array.filter((char) => char <= 'z' && char >= '0'); 
    const joint = filtered.join("");
    const size = joint.length;
    let first = joint.slice(0, size/2).split("").reverse().join("");
    return joint.endsWith(first);
};


// Do not edit below this line
module.exports = palindromes;
