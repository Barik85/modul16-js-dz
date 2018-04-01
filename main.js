class Shape {
    constructor(color, initX, initY) {
        this.color = color;
        this.initX = initX;
        this.initY = initY;
    }

    getColor() {
        return this.color;
    }

    setColor(val) {
        this.color = val;
    }

    getCoords() {
        return {
            x: this.initX,
            y: this.initY
        }
    }

    moveTo(newX, newY) {
        this.initX = newX;
        this.initY = newY;
    }
}

class Rectangle extends Shape {
    constructor(color, initX, initY, initWidth, initHeight) {
        super(color, initX, initY);
        this.initWidth = initWidth;
        this.initHeight = initHeight;
    }

    setWidth(newWidth) {
        this.initWidth = newWidth;
    }

    setHeight(newHeight) {
        this.initHeight = newHeight;
    }

    getDims() {
        return {
            initWidth: this.initWidth,
            initHeight: this.initHeight
        }
    }

    draw() {
        console.log ('Drawing rectangle at: ' + 'x: ' + this.getCoords().x + ' y: ' + this.getCoords().y
            + ' With dimentions: Width: ' + this.getDims().initWidth + ' Height: ' + this.getDims().initHeight
            + ' Filled with color:' + this.getColor())
    }

    drawOnCLick(e) {
        e.preventDefault();
        console.log(e);
        let figureColor = this.getRandomColor(); // Как вызвать метод класса в момент события? This ведь меняется
        let drawingRect = new Rectangle(figureColor,e.clientX,e.clientY);
        console.log(figureColor);
        console.log(drawingRect);
        let figure = document.createElement('div');
        figure.style.position = 'absolute';
        figure.style.left = 'absolute';
    }

    getRandomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
}

const myRect = new Rectangle('blue', 200, 300, 12, 18);
myRect.draw();

class Circle extends Shape {
    constructor(color, initX, initY, radius) {
        super(color, initX, initY);
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(val) {
        this.radius = val;
    }

    draw() {
        console.log ('Drawing circle at: ' + 'x: ' + this.getCoords().x + ' y: ' + this.getCoords().y
            + ' With dimentions: Radius: ' + this.getRadius() + ' Filled with color:' + this.getColor())
    }
}

const myCircle = new Circle('red', 200, 500, 50);
myCircle.draw();

document.addEventListener('mousedown', myRect.drawOnCLick);
