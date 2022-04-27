const removeFromArray = function(arr) {
    arr = ([1, 2, 3], "1", 3)
    let array = arr.filter((element) => typeof element !== "string");
    return array;
}

removeFromArray();

// Do not edit below this line
module.exports = removeFromArray;