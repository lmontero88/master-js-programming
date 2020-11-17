function addProperty(obj, key) {
    obj[key]=true;
    return obj
  // your code here
}
var myObj = {};
addProperty(myObj, 'myProperty');