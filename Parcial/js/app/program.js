import { ColBinder } from "../lib/services/col-binder.js";
import { VehicleGrid } from "../lib/services/vehicle-grid.js";
export default class Program {
    static main(...args) {
        Program.initialize();
        // BEGIN Test
        // const grid = new PetGrid(
        //     new ColBinder("Nombre", "nombre"),
        //     new ColBinder("Atributos", "vidas", "tipo", "raza")
        // );
        // var gato = new Gato("Tom", 7);
        // var perro = new Perro("Chacho", "Salchicha");
        // var pajaro = new Pajaro("Pako", eTipo.Rapiña);
        // grid.Add(gato);
        // grid.Add(perro);
        // grid.Add(pajaro);
        // let table = grid.toGrid();
        // let wrapper = document.getElementById("table-wrapper");
        // wrapper.appendChild(table);
        // END Test
    }
    static initialize() {
        // const petGrid = new PetGrid(
        //     new ColBinder("Nombre", "nombre"),
        //     new ColBinder("Atributos", "vidas", "tipo", "raza")
        // );
        // let button = document.getElementById("new-pet");
        // let search = document.getElementById("search");
        // search.addEventListener("keyup", (e) => petGrid.search(e));
        // button.addEventListener("click", () => petGrid.generate());
        // let searchbar = document.getElementById("search-bar");
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