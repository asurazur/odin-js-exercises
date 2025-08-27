function calculateAge(obj) {
    if (!('yearOfDeath' in obj))
        obj.yearOfDeath = new Date().getFullYear()
    return obj.yearOfDeath - obj.yearOfBirth
}

const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, currentPerson) => {
        return (calculateAge(oldestPerson) > calculateAge(currentPerson)) ? oldestPerson : currentPerson
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
