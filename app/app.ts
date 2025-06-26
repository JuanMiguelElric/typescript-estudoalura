import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController();
 const form = document.querySelector('.form');


 //toda vez que submeter esse form vai chamar o metodo adiciona
 form.addEventListener('submit', event =>{
    //impede que a pagina se auto carregue 
    event.preventDefault();
    controller.adiciona();
 })