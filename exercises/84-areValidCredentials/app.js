// Write your function here
 function areValidCredentials(usuario, password){
     let valUsu = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/;
     let valPass = /[1-8]/;
     if ( valUsu.test(usuario)  && valPass.test(password)){
        return true;
     }
     else {
         return false;
         }

 }

 var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero