const findTheOldest = function (input) {
  sortedAge = input.sort(function (firstPerson, secondPerson) {
    for (i = 0; i < input.length; i++) {
      if (input[i].yearOfDeath === undefined) {
        let d = new Date()
        let year = d.getFullYear()
        input[i].yearOfDeath = year
      }
    }
    if ((firstPerson.yearOfDeath - firstPerson.yearOfBirth) > (secondPerson.yearOfDeath - secondPerson.yearOfBirth)) {
      return -1
    }
    else {
      return 1
    }
  })

  console.table(sortedAge)
  return sortedAge[0]
};

// Do not edit below this line
module.exports = findTheOldest;

