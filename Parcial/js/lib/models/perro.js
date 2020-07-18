import { Mascota } from "./mascota.js";
class Perro extends Mascota {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    get Raza() {
        return this.Raza;
    }
    set Raza(raza) {
        this.raza = raza;
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
            });
        });
        tr.setAttribute("classType", this.constructor.name);
        return tr;
    }
}
export { Perro };
//# sourceMappingURL=perro.js.map