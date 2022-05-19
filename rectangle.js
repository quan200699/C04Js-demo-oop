class Rectangle {
    width;
    height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get w() {
        return this.width;
    }

    set w(width) {
        this.width = width;
    }

    getPerimeter() {
        return (this.width + this.height) * 2;
    }

    getArea() {
        return this.width * this.height;
    }
}
