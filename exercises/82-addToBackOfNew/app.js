// Write your function here
var input = [1, 2];
var nuevoarray = [];
function addToBackOfNew(array,elem){
        nuevoarray = array.concat(elem)
        return nuevoarray;
}

var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]