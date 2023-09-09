const sumAll = function(num1, num2) {
let result = 0;
let numbers = [];

 if ((num1 < 0 ) || (num2 < 0)){
      return ('ERROR');
} else if (typeof num1 === 'number' && typeof num2 === 'number'){
      let smallest = Math.min(num1, num2);
      let biggy = Math.max(num1, num2);

      // now just need to make a loop somehow that iterates and fills in the missing numbers
      for (let i = smallest; i <= biggy; i++){
            numbers.push(i);
      }
      numbers.forEach((num) => {return result += num;})
      // alert(`the numbers in the array are : ${numbers} and the result is: ${result}`);
      return result;

} else {
      return('ERROR');
}


// return numbers;
};

// Do not edit below this line
module.exports = sumAll;
