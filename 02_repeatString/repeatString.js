const repeatString = function(given, times) {
    out = ""

    if (times < 0) {
        return "ERROR";
    }

    for (count = 0; count < times; count++) {
        out += given;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
