const sumAll = function(a, b) {
    
    const high = Math.max(a, b)
    const low = Math.min(a, b);
    if (a < 0 || b < 0) return "ERROR";

    return high * (high + 1) / 2 - (low - 1) * (low) / 2
    }

sumAll(123,4);

// Do not edit below this line
module.exports = sumAll;