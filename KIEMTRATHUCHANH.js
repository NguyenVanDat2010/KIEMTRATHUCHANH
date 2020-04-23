//BAi 01:---------------------------------------------------------------------------------------------------------------
function finMax(arr) {
    let maxScore = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (maxScore < arr[i]) {
            maxScore = arr[i];
        }
    }
    return maxScore;
}

console.log(finMax([1 , 6 , 2 , 9 , 4 , 5]));

//Bai 02:---------------------------------------------------------------------------------------------------------------
function tryRemoteFromArray(arr , x) {
    for (let i = 0; i <= arr.length; i++) {
        if (x == arr[i]) {
            arr.splice(i , 1);
            i = 0;
            if (arr.length == 1) {
                i--;
            }
        }
    }
    return arr;
}

console.log(tryRemoteFromArray([1 , 6 , 2 , 9 , 4 , 5] , 2));

//Bai 03:---------------------------------------------------------------------------------------------------------------
function isFibonancy(n) {
    let f0 = 0 , f1 = 1 , f2;
    for (let i = 0; i <= n; i++) {
        f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
        if (f2 == n) {
            return true;
        }
    }
    return false;
}

console.log(isFibonancy(8));

//Bai 04:---------------------------------------------------------------------------------------------------------------
let Circle = function (x , y , radius , color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.getRadius = function () {
        return this.radius;
    };
    this.setRadius = function (radius) {
        this.radius = radius;
    };
    this.render = function () {
        let context = document.getElementById('myCanvas').getContext('2d');
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x , this.y , this.radius , 0 , 2 * Math.PI);
        context.fill();
    }
};

let circle = new Circle(10 , 10 , 100 , '#000000');
circle.render();