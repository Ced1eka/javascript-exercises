const findTheOldest = function (people) {

      const getAge = function (death, birth) {
            if (!death) {
              death = new Date().getFullYear();
            }
            return death
          };

  return people.reduce((a, b) => {
    const personA = getAge(a.yearOfDeath , a.yearOfBirth) - a.yearOfBirth;
    const personB = getAge(b.yearOfDeath , b.yearOfBirth) - b.yearOfBirth;
    return personA > personB ? a : b;
  });
};




// Do not edit below this line
module.exports = findTheOldest;
