import { Mascota } from "./mascota.js";
import { ColBinder } from "../services/col-binder.js";

class Perro extends Mascota {

    get Raza(): string {
        return this.Raza;
    }
    set Raza(raza: string) {
        this.raza = raza;
    }
    public constructor(nombre: string, private raza: string) {
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

        });
        tr.setAttribute("classType", this.constructor.name);
        return tr;
    }
}

export { Perro };
