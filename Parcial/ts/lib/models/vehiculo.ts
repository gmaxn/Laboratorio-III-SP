import { Rowable } from "../services/rowable.js";
import { ColBinder } from "../services/col-binder.js";

abstract class Vehiculo implements Rowable {

    private _id ;

    private _marca ;

    private _modelo ;

    private _precio ;

    get id(): number {
        return this._id;
    }
    set id(value:number) {
        this._id = value;
    }
    get marca(): string {
        return this._marca;
    }
    set marca(value:string) {
        this._marca = value;
    }
    get modelo(): string {
        return this._modelo;
    }
    set modelo(value:string) {
        this._modelo = value;
    }
    get precio(): number {
        return this._precio;
    }
    set precio(value:number) {
        this._precio = value;
    }

    constructor( id:number,  marca:string,  modelo:string,  precio:number)
    { 
        this._id = id;

        this._marca = marca;

        this._modelo = modelo;

        this._precio = precio;
    }

    abstract toRow(cols: ColBinder[]): HTMLElement;
}

export { Vehiculo };