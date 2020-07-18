import { Rowable } from "./rowable.js";
import { ColBinder } from "./col-binder.js";

abstract class Grid<T extends Rowable> {

    protected _list: Array<T>;
    protected _cols: ColBinder[];

    get cols(): ColBinder[] {
        return this._cols;
    }

    set cols(value:ColBinder[]){
        this._cols = value;
    }
    

    constructor(cols:ColBinder[]) {
        this._list = new Array<T>();
        this._cols = cols;
    }

    public Add(object: T) {

        if(true) {
            this._list.push(object);
        }
    }

    public toGrid(): HTMLElement {

        let table = document.createElement("table");
        let thead = document.createElement("thead");
        
        this._cols.forEach(c => {

            let td = document.createElement("th");
            let colTitle = document.createTextNode(c.ColName);
            td.appendChild(colTitle);
            thead.appendChild(td);
        });

        table.appendChild(thead);

        let tbody = document.createElement("tbody");

        this._list.forEach(elem => {

            let row = elem.toRow(this._cols);
            
            
            tbody.appendChild(row);
        });

        table.appendChild(tbody);

        return table;
    }
}

export { Grid };