// Write your function here
function findMaxLengthOfThreeWords(palabra1, palabra2, palabra3){
    let pa1 = palabra1.length;
    let pa2 = palabra2.length;
    let pa3 = palabra3.length;

    if(pa1<pa3 && pa2<pa3){
        return pa3
    }
    else if( pa1<pa2 && pa3<pa2){
        return pa2
    }
    else{ return pa1}

}
var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3