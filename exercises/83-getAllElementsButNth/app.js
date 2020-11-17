// Write your function here

function getAllElementsButNth(arr,item){
    arr.splice(item,1);
    return arr;
}


var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']