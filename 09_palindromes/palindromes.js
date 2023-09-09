const palindromes = function (param) {
// let emptyArr = [];
// let toStr = param.toString();

// emptyArr.push(...toStr);

// let reversi = toStr.split('').reverse().join('');
// let isEq = true;

//  toStr.forEach((eleArr1, indexOfArr2) =>{
//       if (eleArr1 !== reversi[indexOfArr2]){
//             isEq = false;
//       }
// })

// return isEq;

  // Convert the input to a string and remove spaces and punctuation
  let str = param.toString().replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the string
  let reversed = str.split('').reverse().join('');

  // Compare the original string with the reversed string
  return str === reversed;

};
//  return emptyArr.some(itm => reversi.includes(itm));

// Do not edit below this line
module.exports = palindromes;
