"use strict";
// class User {
//     constructor(public firstName: string, private readonly lastName: string = 'Good user name') {
//         this.firstName = firstName;
//         this.lastName  = lastName;
//     }
//
//     print() {
//         console.log(`${ this.firstName } ${ this.lastName }`);
//     }
//
// }
//
// let user1: User = new User('Jow', 'Mick');
// user1.print();
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var Grid = /** @class */ (function () {
    function Grid() {
        this.points = [];
    }
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid();
console.log(grid1);
function drawSomething(rect) {
    if (rect.name) {
        console.log("Name " + rect.name);
    }
    console.log(rect.height + " " + rect.height);
}
var rect1 = {
    name: 'Rectangle1',
    width: 123,
    height: 45
};
drawSomething(rect1);
