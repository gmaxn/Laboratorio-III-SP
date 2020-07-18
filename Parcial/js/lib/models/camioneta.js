import { Vehiculo } from "./vehiculo.js";
class Camioneta extends Vehiculo {
    constructor(id, marca, modelo, precio, cuatroXcuatro) {
        super(id, marca, modelo, precio);
        this._cuatroXcuatro = cuatroXcuatro;
    }
    get cuatroXcuatro() {
        return this._cuatroXcuatro;
    }
    set cuatroXcuatro(value) {
        this._cuatroXcuatro = value;
    }
    toRow(cols) {
        let tr = document.createElement("tr");
        cols.forEach(cb => {
            cb.Attributes.forEach(a => {
                if (this[a] !== undefined) {
                    let td = document.createElement("td");
                    let textNode = document.createTextNode(this[a]);
                    td.appendChild(textNode);
                    tr.appendChild(td);
                }
                else {
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
//# sourceMappingURL=camioneta.js.map