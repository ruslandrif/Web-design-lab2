import View from "../view/view.js"

export default class Model {
    constructor() {
        this.expression_str = ''
    }

    dec2bin() {
        this.expression_str = (parseFloat(this.expression_str) >>> 0).toString(2);
    }

    dec2hex() {
        this.expression_str = (parseFloat(this.expression_str) >>> 0).toString(16);
    }

    calculate_basic(first, last, op) {
        if(op === '+') {
            return (first + last).toString();
        }
        else if(op === '-') {
            return (first - last).toString();
        }
        else if(op === '*') {
            return (first * last).toString();
        }
        else if(op === '/') {
            return (first / last).toString();
        }
        else if(op === '|') {
            return (first | last).toString();
        }
        else if(op === '&') {
            return (first & last).toString();
        }
        else if(op === '^') {
            return (first ^ last).toString();
        }
    }

    calculate() {
        var map_operations = new Map()
        map_operations.set('+',1);
        map_operations.set('-',1);
        map_operations.set('/',2);
        map_operations.set('*',2);
        map_operations.set('|',3);
        map_operations.set('&',3);
        map_operations.set('^',3);

        var operations = []
        var numbers = []

        var current_number = ''

        for(var i = 0; i < this.expression_str.length; i++) {
            const current_char = this.expression_str.charAt(i)
            if(map_operations.has(current_char)) {
                var number = parseFloat(current_number)
                numbers.push(number)
                current_number = ''

                while(!(operations.length === 0 || map_operations.get(operations[operations.length - 1]) < map_operations.get(current_char))) {
                    var last_number = numbers.pop();
                    var pre_last_number = numbers.pop();
                    var op = operations.pop();
                    numbers.push(parseFloat(this.calculate_basic(pre_last_number, last_number, op)))
                }

                operations.push(current_char)
                
            }
            else {
                current_number += current_char
            }
        }
        if(current_number.length !== 0) {
            numbers.push(parseInt(current_number))
        }
        
        if(numbers.length === 2 && operations.length === 1) {
            var last_number = numbers.pop();
            var pre_last_number = numbers.pop();
            var op = operations.pop();
            this.expression_str =  this.calculate_basic(pre_last_number, last_number, op)
        }
        else if(numbers.length === 1 && operations.length === 0) {
            this.expression_str = numbers.pop().toString()
        }
        else {
            this.expression_str = "Invalid expression!"
        }
    }
}