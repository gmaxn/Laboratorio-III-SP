import { Vehiculo } from "./vehiculo.js";
import { ColBinder } from "../services/col-binder.js";

class Auto extends Vehiculo {

    get cantPuertas(): number {
        return this.puertas;
    }
    set cantPuertas(value:number) {
        this.puertas = value;
    }
    constructor(id:number, marca:string, modelo:string, precio:number,private puertas: number) {
        super(id, marca, modelo, precio)
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
                else{
                    let td = document.createElement("td");
                    let textNode = document.createTextNode("-");
                    td.appendChild(textNode);
                    tr.appendChild(td);
                }
            });

            tr.setAttribute("classType", this.constructor.name);
        });

        return tr;
    }
}

export { Auto };