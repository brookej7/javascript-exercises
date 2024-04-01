const sumAll = function(start, end) {

    if (typeof start != 'number' | typeof end != 'number' ) {
        return "ERROR";
    }
    else if (start < 0 | end < 0) {
        return "ERROR";
    }

    let sum = 0;

    if (end > start) {
        while (start <= end) {
            sum += start;
            start++;
        }
    } else {
        while (end <= start) {
            sum += end;
            end++;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
