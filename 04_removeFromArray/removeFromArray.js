const removeFromArray = function(array, ...values) {

      let hotNewArr = [];

      for (let i = 0; i < array.length; i++){

            if (!values.includes(array[i])) {
                  hotNewArr.push(array[i]);
                }
      }
return hotNewArr;

};


// Do not edit below this line
module.exports = removeFromArray;
