function getProperty(obj, key) {
  // your code here
  return obj[key];

}

var car = {
  model: 'Toyota',
  year: 2020,
  color: 'red'
};

getProperty(car,"year")