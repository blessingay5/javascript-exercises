// find the oldest
//finds the oldest person if yearOfDeath field is undefined on a non-oldest person
//finds the oldest person if yearOfDeath field is undefined for the oldest person
const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.reduce ((oldest, youngest) => {
    // firstly Calculate age of the current oldest person
    const oldestYearOfDeath = oldest.yearOfDeath ?? currentYear;
    const oldestAge = oldestYearOfDeath - oldest.yearOfBirth;

    //now calculate age of the yongest person
    const currentYearOfDeath = youngest.yearOfDeath ?? currentYear;
    const yongestAge = currentYearOfDeath - youngest.yearOfBirth    ;

    return yongestAge > oldestAge ? youngest : oldest;
  });
};
    


// Do not edit below this line
module.exports = findTheOldest;
