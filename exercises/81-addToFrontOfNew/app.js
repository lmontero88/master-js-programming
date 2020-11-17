// Write your function here

function addToFrontOfNew(array, elem){
    let nuevo = [elem].concat(array)
    return nuevo;
}

const input = [1, 2];
const output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); 
