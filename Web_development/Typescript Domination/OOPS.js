var user = { name: "Sameer", id: 1 };
var greet = function (name) { return "Hello, ".concat(name); };
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
