// ES6 class with inheritance

class Shape {
    constructor(color = "black") {
        this.color = color;
    }
    
    describe() {
        return this.constructor.name + " (" + this.color + ")";
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

// usage
const c = new Circle(5, "red");
console.log(c.describe());
console.log("Area:", c.area().toFixed(2));
console.log("Perimeter:", c.perimeter().toFixed(2));

const r = new Rectangle(4, 6, "blue");
console.log("\n" + r.describe());
console.log("Area:", r.area());
console.log("Perimeter:", r.perimeter());
