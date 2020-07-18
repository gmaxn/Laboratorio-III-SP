import { Mascota } from "./mascota.js";
class Gato extends Mascota {
    constructor(nombre, vidas) {
        super(nombre);
        this.vidas = vidas;
    }
    get CantVidas() {
        return this.vidas;
    }
    set CantVidas(value) {
        this.vidas = value;
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
            tr.setAttribute("classType", this.constructor.name);
        });
        return tr;
    }
}
export { Gato };
//# sourceMappingURL=gato.js.map