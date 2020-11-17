// Write your function here
var obj = {
  key: [1, 2, 3],
  
};

 
function getAverageOfElementsAtProperty(obj,key){
        let suma = 0;
        if( obj[key].length === 0 || obj[key]=== undefined){
            return 0;
        }

    for(var i = 0; i < obj[key].length; i++){
        let numero = obj[key][i];
         suma = suma + numero;
        }
         return suma/obj[key].length
}
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);