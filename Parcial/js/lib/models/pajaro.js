import { Mascota } from "./mascota.js";
var eTipo;
(function (eTipo) {
    eTipo[eTipo["Rapi\u00F1a"] = 1] = "Rapi\u00F1a";
    eTipo[eTipo["Loro"] = 2] = "Loro";
})(eTipo || (eTipo = {}));
;
class Pajaro extends Mascota {
    constructor(nombre, tipo) {
        super(nombre);
        this.tipo = tipo;
    }
    get Tipo() {
        return this.tipo;
    }
    set Tipo(value) {
        this.tipo = value;
    }
    toRow(cols) {
        let tr = document.createElement("tr");
        cols.forEach(cb => {
            cb.Attributes.forEach(a => {
                if (this[a] !== undefined) {
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
//# sourceMappingURL=pajaro.js.map