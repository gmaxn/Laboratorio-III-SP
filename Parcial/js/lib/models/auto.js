import { Vehiculo } from "./vehiculo.js";
class Auto extends Vehiculo {
    constructor(id, marca, modelo, precio, puertas) {
        super(id, marca, modelo, precio);
        this.puertas = puertas;
    }
    get cantPuertas() {
        return this.puertas;
    }
    set cantPuertas(value) {
        this.puertas = value;
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
export { Auto };
//# sourceMappingURL=auto.js.map