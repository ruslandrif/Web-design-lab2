import Model from "../model/model.js";

export default class Controller {
    constructor(Model, View, IsCalcForDevs) {
        this.model = Model;
        this.view = View;

       console.log(IsCalcForDevs)

        document.getElementById('1').addEventListener("click",ev=>{
            this.view.UpdateUI('1')
        });
        document.getElementById('2').addEventListener("click",ev=>{
            this.view.UpdateUI('2')
        });
        document.getElementById('3').addEventListener("click",ev=>{
            this.view.UpdateUI('3')
        });
        document.getElementById('4').addEventListener("click",ev=>{
            this.view.UpdateUI('4')
        });
        document.getElementById('5').addEventListener("click",ev=>{
            this.view.UpdateUI('5')
        });
        document.getElementById('6').addEventListener("click",ev=>{
            this.view.UpdateUI('6')
        });
        document.getElementById('7').addEventListener("click",ev=>{
            this.view.UpdateUI('7')
        });
        document.getElementById('8').addEventListener("click",ev=>{
            this.view.UpdateUI('8')
        });
        document.getElementById('9').addEventListener("click",ev=>{
            this.view.UpdateUI('9')
        });
        document.getElementById('*').addEventListener("click",ev=>{
            this.view.UpdateUI('*')
        });
        document.getElementById('/').addEventListener("click",ev=>{
            this.view.UpdateUI('/')
        });
        document.getElementById('+').addEventListener("click",ev=>{
            this.view.UpdateUI('+')
        });
        document.getElementById('-').addEventListener("click",ev=>{
            this.view.UpdateUI('-')
        });
        document.getElementById('=').addEventListener("click",ev=>{
            //todo
        });
        document.getElementById('Clear').addEventListener("click",ev=>{
            //todo
            this.view.Clear()
        });
    }

    
}