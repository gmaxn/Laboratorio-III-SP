import { Vehiculo } from "./vehiculo.js";
import { ColBinder } from "../services/col-binder.js";

class Camioneta extends Vehiculo {

    private _cuatroXcuatro:boolean;

    get cuatroXcuatro(): boolean {
        return this._cuatroXcuatro;
    }
    set cuatroXcuatro(value:boolean) {
        this._cuatroXcuatro = value;
    }
    constructor(id:number, marca:string, modelo:string, precio:number, cuatroXcuatro: boolean) {
        super(id, marca, modelo, precio)

        this._cuatroXcuatro = cuatroXcuatro;
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
                }else{
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

export { Camioneta };