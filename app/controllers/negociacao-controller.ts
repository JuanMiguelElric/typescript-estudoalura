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
        const negociacao = new Negociacao(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
            

    }
}