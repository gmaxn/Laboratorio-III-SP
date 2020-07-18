import { Mascota } from "./mascota.js";
import { ColBinder } from "../services/col-binder.js";

class Gato extends Mascota {

    get CantVidas(): number {
        return this.vidas;
    }
    set CantVidas(value:number) {
        this.vidas = value;
    }
    constructor(nombre: string, private vidas: number) {
        super(nombre)
    }

    public toRow(cols: ColBinder[]): HTMLElement {

        let tr = document.createElement("tr");

        cols.forEach(cb => {  
            
            cb.Attributes.forEach(a => {

                if(this[a] !== undefined) {

                    let td = document.createElement("td");
                    let textNode = document.createTextNode(this[a]);
                    td.appendChild(textNode);
                    tr.appendChild(td);
                }
            });
            tr.setAttribute("classType", this.constructor.name);
        });

        return tr;
    }
}

export { Gato };