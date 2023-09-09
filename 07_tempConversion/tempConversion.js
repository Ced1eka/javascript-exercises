const convertToCelsius = function(Cel) {
 return Math.round(((Cel - 32) / 1.800) * 10) / 10;



  // if (Cel >= 0) {
  //   let result = Math.round((Cel - 32) / 1.800);
  //   alert(result)
  // } else if (Cel > 100){
  //   let result =  Number(((Cel - 32) / 1.800).toFixed(1));
  //   alert(result)
  // }

};

const convertToFahrenheit = function(Cel) {
 return Math.round(((Cel * 1.8000) + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
