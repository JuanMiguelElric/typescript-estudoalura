
export class Negociacao {
   private _data: Date;
   private _quantidade: number;
   private _valor: number;
   // private para encapsular os queridos

    constructor(data: Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //pegando componentes privados

    get data(): Date{
        return this._data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}