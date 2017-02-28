/**
 * Created by Roman on 25.02.2017.
 */

var pow = function(number, exponent) {
    if (isNaN(number) || isNaN(exponent) || !(number || exponent)) {
        return NaN;
    }

    var result = 1;
    if (exponent >= 1) {
        for (var j = 1; j <= exponent; j++) {
            result *= number;
        }
    } else if(exponent < -1){
        for (var i = exponent; i < 0; i++) {
            result /= number;
        }
    } else {
            result = Math.pow(number, exponent);
        }
    return result;
};

module.exports = pow;