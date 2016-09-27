'use strict';

var variant = prompt('print "1" if you want come to first program and print "2" if second');

if(variant == 1) {
    var pow = function(number, exponent) {
        if (isNaN(number) || isNaN(exponent) || !(number || exponent)) {
            return NaN;
        }

        var result = 1;
        if (exponent < 0) {
            for (var i = exponent; i < 0; i++) {
                result /= number;
            }
        } else {
            for (var j = 1; j <= exponent; j++) {
                result *= number;
            }
        }
        return result;
    };

    var number = prompt('Enter number');
    var exponent = prompt('Enter exponent');
    console.log(number + '^' + exponent + '=' + pow(number, exponent));
    alert(pow(number, exponent));
} else {
    if(variant == 2) {
        var arrNames = [];

        for (var i = 0; i < 5; i++) {
            arrNames[i] = prompt('Enter ' + (i + 1) + ' name');
        }

        var userName = prompt('Enter your name');
        var res = "error";
        for (var j = 0; j <= arrNames.length; j++) {
            if (arrNames[j] === userName) {
                alert(res = userName + ', вы успешно вошли');
                break;
            } else {
                if (j == arrNames.length){
                    alert(res = userName + ', вы не в списке гостей. Сорян!');
                }
            }
        }
    }
}


