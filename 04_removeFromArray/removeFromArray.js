const removeFromArray = function(array, ...removeMe) {
    let position;
    for (const arg of removeMe) {
        position = array.indexOf(arg);
        while (position >= 0 ) {  
            array.splice(position, 1);
            position = array.indexOf(arg);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
