const sumAll = function(a, b) {
    if (typeof(a) != 'number' || typeof(b) != 'number')
        return 'ERROR'
    if (a < 0 || b < 0)
        return 'ERROR'
    if (a % 1 != 0 || b % 1 != 0)
        return 'ERROR'
    if (a > b) {
        a = a + b
        b = a - b
        a = a - b
    }
    let n = b - a + 1
    return n * ((a + b)/2)
};

// Do not edit below this line
module.exports = sumAll;
