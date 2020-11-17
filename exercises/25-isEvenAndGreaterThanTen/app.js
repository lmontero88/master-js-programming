// Write your function here
function isEvenAndGreaterThanTen(numero){
    if(numero%2==0 && numero>10){
        return true;
    }
    else{
        return false
    }
}
var output = isEvenAndGreaterThanTen(13);
console.log(output)