/**
 * Created by Roman on 25.02.2017.
 */
var pow = require('../script');

describe("Pow is NaN?", function() {
    it("checking the entered value of number", function() {
        expect(pow(1,'someStr')).toEqual(NaN);
    });
    it("checking the entered value of exponent", function() {
        expect(pow('someStr', 1)).toEqual(NaN);
    });
});

describe("Checking the exponent", function () {
    it("When exponent equals 0", function () {
        expect(pow(2,0)).toBe(1);
    });
    it("When exponent equals 1", function () {
        expect(pow(4,1)).toBe(4);
    });
    it("When exponent equals fractional number", function () {
        expect(pow(4,0.5)).toBe(2);
    });
    it("When exponent equals negative fractional number", function () {
        expect(pow(4,-0.5)).toBe(0.5);
    });
    it("When exponent equals negative  number", function () {
        expect(pow(4,-2)).toBe(0.0625);
    })
});

describe("Checking the number", function () {
    it("When number equals 0", function () {
        expect(pow(0,2)).toBe(0);
    });
    it("When nember equals 1", function () {
        expect(pow(1,3)).toBe(1);
    });
    it("When nember equals fractional number", function () {
        expect(pow(0.5,2)).toBe(0.25);
    });
    it("When nember equals negative fractional number", function () {
        expect(pow(-0.5,4)).toBe(0.0625);
    });
    it("When nember equals negative  number", function () {
        expect(pow(-3,2)).toBe(9);
    })
});