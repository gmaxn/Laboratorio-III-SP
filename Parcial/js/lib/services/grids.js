class Grids {
    constructor() {
        this.list = new Array();
    }
    Add(object) {
        if (true) {
            this.list.push(object);
        }
    }
    toGrid(...cols) {
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        cols.forEach(c => {
            let td = document.createElement("th");
            let colTitle = document.createTextNode(c.ColName);
            td.appendChild(colTitle);
            thead.appendChild(td);
        });
        table.appendChild(thead);
        let tbody = document.createElement("tbody");
        this.list.forEach(elem => {
            let row = elem.toRow(cols);
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        return table;
    }
}
//# sourceMappingURL=grids.js.map