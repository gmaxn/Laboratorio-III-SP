class ColBinder {
    constructor(colName, ...attributes) {
        this.colName = colName;
        this._attributes = attributes;
    }
    get ColName() {
        return this.colName;
    }
    get Attributes() {
        return this._attributes;
    }
}
export { ColBinder };
//# sourceMappingURL=col-binder.js.map