// Your code here
class Polygon {
    constructor(array) {
    this.array = array;
    }
    get countSides() {
        return this.array.length
    }
    get perimeter() {
        return this.array.reduce((total, side) => total + side, 0);
    }
}
class Triangle extends Polygon {
    get isValid() {
        if (this.array.length === 3) {
            return (
                this.array[0] + this.array[1] > this.array[2] &&
                this.array[1] + this.array[2] > this.array[0] &&
                this.array[0] + this.array[2] > this.array[1]
              );
            
        } else {
            return false
        }
    }
}
class Square extends Polygon {
    get isValid() {
        const sideLength = this.array[0];
        return this.array.every(side => side === sideLength);
        }
    get area() {
        const sideLength = this.array[0];
        return sideLength ** 2
    }
}
