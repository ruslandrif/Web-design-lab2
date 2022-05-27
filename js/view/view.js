export default class View {
    constructor(Model) {
        this.model = Model
    }

    UpdateUI(symbol) {
        if(symbol) {
            this.model.expression_str += symbol
        }
        document.getElementById('input').value = this.model.expression_str;
        console.log("update ui")
    }

    Clear() {
        this.model.expression_str = ''
        this.UpdateUI()
    }

    EraseLastSymbol() {
        this.model.expression_str.slice(0, -1);
        this.UpdateUI()
    }
}