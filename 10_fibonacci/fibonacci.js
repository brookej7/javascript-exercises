const fibonacci = function(size) {
    let fib = [1];
    let start = 1;
    if (size == 0) {
        return 0
    } else if (size < 0) {
        return "OOPS";
    }
    while (fib.length < size) {
        fib.push(start);
        start = fib[fib.length - 2] + start;
    }
    return fib[size - 1];
};

// Do not edit below this line
module.exports = fibonacci;
