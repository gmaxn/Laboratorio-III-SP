class Vehiculo {
    constructor(id, marca, modelo, precio) {
        this._id = id;
        this._marca = marca;
        this._modelo = modelo;
        this._precio = precio;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get marca() {
        return this._marca;
    }
    set marca(value) {
        this._marca = value;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(value) {
        this._modelo = value;
    }
    get precio() {
        return this._precio;
    }
    set precio(value) {
        this._precio = value;
    }
}
export { Vehiculo };
//# sourceMappingURL=vehiculo.js.map