"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./src/utilities");
var diff = function (a, b) {
    return Math.abs(a - b);
};
var thresh = 0.0001;
test('getCoordinates on easy degrees', function () {
    // coordinates are rotated 90-degrees in the final SVG (0 degrees is at the top)
    // angles increase moving clockwise
    // 0-percent
    var coord = utilities_1.getCoordinates(0);
    expect(diff(coord.x, 24)).toBeLessThan(thresh);
    expect(diff(coord.y, 12)).toBeLessThan(thresh);
    // 25-percent
    coord = utilities_1.getCoordinates(25);
    expect(diff(coord.x, 12)).toBeLessThan(thresh);
    expect(diff(coord.y, 24)).toBeLessThan(thresh);
    // 50-percent
    coord = utilities_1.getCoordinates(50);
    expect(diff(coord.x, 0)).toBeLessThan(thresh);
    expect(diff(coord.y, 12)).toBeLessThan(thresh);
    // 75-percent
    coord = utilities_1.getCoordinates(75);
    expect(diff(coord.x, 12)).toBeLessThan(thresh);
    expect(diff(coord.y, 0)).toBeLessThan(thresh);
    // 100-percent
    coord = utilities_1.getCoordinates(100);
    expect(diff(coord.x, 24)).toBeLessThan(thresh);
    expect(diff(coord.y, 12)).toBeLessThan(thresh);
});
test('getCoordinates on tough degrees', function () {
    // coordinates are rotated 90-degrees in the final SVG (0 degrees is at the top)
    // angles increase moving clockwisE
    // 13-degrees
    var coord = utilities_1.getCoordinates(13 * 100 / 360);
    expect(diff(coord.x, 23.6924)).toBeLessThan(thresh);
    expect(diff(coord.y, 14.6994)).toBeLessThan(thresh);
    // 45-degrees
    coord = utilities_1.getCoordinates(45 * 100 / 360);
    expect(diff(coord.x, 20.4852)).toBeLessThan(thresh);
    expect(diff(coord.y, 20.4852)).toBeLessThan(thresh);
    // 71-degrees
    coord = utilities_1.getCoordinates(71 * 100 / 360);
    expect(diff(coord.x, 15.9068)).toBeLessThan(thresh);
    expect(diff(coord.y, 23.3462)).toBeLessThan(thresh);
    // 106-degrees
    coord = utilities_1.getCoordinates(106 * 100 / 360);
    expect(diff(coord.x, 8.6923)).toBeLessThan(thresh);
    expect(diff(coord.y, 23.5351)).toBeLessThan(thresh);
    // 262-degrees
    coord = utilities_1.getCoordinates(262 * 100 / 360);
    expect(diff(coord.x, 10.3299)).toBeLessThan(thresh);
    expect(diff(coord.y, 0.1167)).toBeLessThan(thresh);
    // 304-degrees
    coord = utilities_1.getCoordinates(304 * 100 / 360);
    expect(diff(coord.x, 18.7103)).toBeLessThan(thresh);
    expect(diff(coord.y, 2.0515)).toBeLessThan(thresh);
});
