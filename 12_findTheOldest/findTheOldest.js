const findTheOldest = function(people) {
    let dated = people.map((person) => {
        if (person.yearOfDeath==undefined) {
            person.yearOfDeath = (new Date()).getFullYear();
        }
        return person;
    }
    )
    let sorted = dated.sort((first, next) => (first.yearOfBirth - first.yearOfDeath) > 
            (next.yearOfBirth - next.yearOfDeath) ? 1:-1);
    return sorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;
