import { Mascota } from "./mascota.js";
import { ColBinder } from "../services/col-binder.js";

enum eTipo { Rapiña = 1, Loro = 2 };

class Pajaro extends Mascota {

    get Tipo(): eTipo {
        return this.tipo;
    }
    set Tipo(value:eTipo) {
        this.tipo = value;
    }
    constructor(nombre: string, private tipo: eTipo) {
        super(nombre);
    }

    public toRow(cols: ColBinder[]): HTMLElement {

        let tr = document.createElement("tr");

        cols.forEach(cb => {  
            
            cb.Attributes.forEach(a => {

                if(this[a] !== undefined) {

                    let td = document.createElement("td");
                    let textNode = document.createTextNode((a === "tipo" ? eTipo[this[a]] : this[a]));
                    td.appendChild(textNode);
                    tr.appendChild(td);
                }
            });
        });

        tr.setAttribute("classType", this.constructor.name);
        return tr;
    }
}

export { eTipo, Pajaro };
