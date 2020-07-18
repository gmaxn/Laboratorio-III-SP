class Grid {
    constructor(cols) {
        this._list = new Array();
        this._cols = cols;
    }
    get cols() {
        return this._cols;
    }
    set cols(value) {
        this._cols = value;
    }
    Add(object) {
        if (true) {
            this._list.push(object);
        }
    }
    toGrid() {
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
//# sourceMappingURL=grid.js.map