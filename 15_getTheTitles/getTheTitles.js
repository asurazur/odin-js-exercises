const getTheTitles = function(obj) {
    return obj.reduce((arr, current) => {
        arr.push(current.title)
        return arr
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
