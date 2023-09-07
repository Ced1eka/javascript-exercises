const reverseString = function(word) {
      let strings = word.toString();
      const splits = strings.split('');
      const reversed = splits.reverse();
      const joined = reversed.join('');
      // const result = joined.toString();
      return joined;
};

// Do not edit below this line
module.exports = reverseString;
