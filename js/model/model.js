import View from "../view/view.js"
//import Math from Math

export default class Model {
    constructor() {
        this.expression_str = ''
    }

    calculate() {
        return Math.evaluate('2+2')
    }
}