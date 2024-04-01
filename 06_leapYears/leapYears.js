const leapYears = function(year) {

    if(!Number.isInteger(year)) return false;

    if (year % 4 == 0) {

        let divisbleBy100 = (year % 100 == 0);

        if (divisbleBy100 && (year % 400 == 0)) {

            return true

        } else if (divisbleBy100) {
            return false;
        }
        
        return true;

    } else {

        return false;

    }

};

// Do not edit below this line
module.exports = leapYears;
