const leapYears = function(param) {

      if (param % 4 === 0 || param % 400 === 0) {
      if (param % 100 === 0 && param % 400 !== 0){ return false}
        return true;
      } else if (param % 4 !== 0) {return false}

};

// Do not edit below this line
module.exports = leapYears;
