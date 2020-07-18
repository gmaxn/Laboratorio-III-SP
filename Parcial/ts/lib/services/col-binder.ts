class ColBinder {
    private _attributes: string[];

    get ColName(): string {
        return this.colName;
    }
    get Attributes(): string[] {
        return this._attributes;
    }
    constructor(private colName: string, ...attributes: string[]) {
        this._attributes = attributes;
    }
}
export { ColBinder };