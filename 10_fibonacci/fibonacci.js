const fibonacci = function(param) {
let num;
let paramN = Number(param);
let fib = [0,1];

if (paramN < 0) return('OOPS');
if (paramN === 1) return(1);

for (let i = 2; i <= paramN; i++){
      fib[i] = fib[i-2] + fib[i-1];
      num = fib[i];
}
return num;

};

// Do not edit below this line
module.exports = fibonacci;
