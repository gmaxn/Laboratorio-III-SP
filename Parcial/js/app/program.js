import { ColBinder } from "../lib/services/col-binder.js";
import { VehicleGrid } from "../lib/services/vehicle-grid.js";
export default class Program {
    static main(...args) {
        Program.initialize();
    }
    static initialize() {
        const vehicleGrid = new VehicleGrid(new ColBinder("Id", "_id"), new ColBinder("Marca", "_marca"), new ColBinder("Modelo", "_modelo"), new ColBinder("Precio", "_precio"), new ColBinder("Puertas", "puertas"), new ColBinder("4x4", "cuatroXcuatro"));
        let button = document.getElementById("new-pet");
        let search = document.getElementById("search");
        search.addEventListener("keyup", (e) => vehicleGrid.search(e));
        button.addEventListener("click", () => vehicleGrid.generate());
        let searchbar = document.getElementById("search-bar");
    }
}
Program.main();
//# sourceMappingURL=program.js.map