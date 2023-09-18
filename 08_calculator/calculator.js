const add = function(add1,add2) {return Number((add1) + Number(add2))};

const subtract = function(sub1, sub2) {
  return sub1 - sub2;
};

const sum = function(Arr) {
  let result = 0;
  Arr.forEach(num => result += num);
  return result;

};

const multiply = function(Arr) {

  return Arr.map(Number).reduce((accumulator,currentValue) =>  accumulator * currentValue);

};

const power = (num,pwr) => Math.pow(num,pwr);

const factorial = function(fctr) {


if (fctr === 0 || fctr === 1) return 1;

for (let i = fctr -1; i>=1;i-- ) {fctr*=i;}

return fctr;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
