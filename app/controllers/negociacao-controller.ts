import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {

    // HTMLInputElement significa que o dado está vindo de um input que está dentro de um form
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(){

        const negociacao = this.criaNegociacao();
        console.log(negociacao);



    }

    criaNegociacao(){
                // tipando para receber corretamente
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp,','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);

    }

    limparFormulario():void{
        this.inputData.value='';
        this.inputQuantidade.value='';
        this.inputValor.value='';
        this.inputData.focus();
    }
}