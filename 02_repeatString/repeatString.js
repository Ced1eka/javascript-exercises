const repeatString = function(string, num) {
      let number = 0;
      if (num === number){
            return('')
      }else if (num > number){
            let str = '';
            if (string === ''){
                  return('')
            }
            for (let i = 0; i < num; i++){
                  str += string;
            }
            return str;
      }else if (num < number){
            return ('ERROR');
      }

};

// Do not edit below this line
module.exports = repeatString;
