import { Rowable } from "../services/rowable.js";
import { ColBinder } from "../services/col-binder.js";

abstract class Mascota implements Rowable {

    get Nombre(): string {
        return this.nombre;
    }
    set Nombre(value:string) {
        this.nombre = value;
    }
    constructor(private nombre: string)
    { }

    abstract toRow(cols: ColBinder[]): HTMLElement;
}

export { Mascota };
