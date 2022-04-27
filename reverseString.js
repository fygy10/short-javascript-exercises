const reverseString = function(str) {
    let splitString = str.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join("");
    return joinString
};

reverseString("hello there")

// Do not edit below this line
module.exports = reverseString;
