import { ColBinder } from "./col-binder.js";

interface Rowable {  
    toRow(cols: ColBinder[]): HTMLElement;
}

export { Rowable };