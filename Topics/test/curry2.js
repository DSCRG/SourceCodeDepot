function n(digit) {
    return function(op) {
        return op ? op(digit) : digit;
    }
}

var one = n(1);
var two = n(2);
var three = n(3);

function plus(addNum) {
    return function(plusNum) {
        return plusNum + addNum;
    }
}

function sub(num) {
    return function(num2){
        return num2 - num;
    }
}

console.log(two(plus(three())))