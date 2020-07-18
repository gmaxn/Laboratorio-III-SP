import { HTMLGenerator } from "./html-generator.js";
import { Grid } from "./grid.js";
import { Vehiculo } from "../models/vehiculo.js";
import { Auto } from "../models/auto.js";
import { Camioneta } from "../models/camioneta.js";
import { ColBinder } from "../services/col-binder.js";


export class VehicleGrid extends Grid<Vehiculo> {

    private lastId: number;

    constructor(...cols:ColBinder[]) {
        super(cols)
        this.lastId = 0;
    }

    public generate(): void {

        // Create form title
        var form = document.createElement("div");
        var title = document.createElement("p");
        title.innerHTML = "Create your vehicle";
        title.className = "form-title";
        form.id = "create-form";
        form.appendChild(title);

        // Create input Brand
        var name = HTMLGenerator.createInputTextControl("Marca", "Give your Vehicle a Brand . . .");
        name.id = "vehicle-brand"
        form.appendChild(name);

        // Create input Model
        var name = HTMLGenerator.createInputTextControl("Modelo", "Give your Vehicle Model . . .");
        name.id = "vehicle-model"
        form.appendChild(name);

        // Create input Price
        var name = HTMLGenerator.createInputTextControl("Precio", "Give your Vehicle a Price . . .");
        name.id = "vehicle-price"
        form.appendChild(name);

        // Create rest of the form based on type
        var select = HTMLGenerator.createInputSelectControl("Choose a Type", [["Auto", "auto"], ["Camioneta","camioneta"]], "Select a type . . .", "car-type", "car-type");
        let opt = select.getElementsByTagName("option");
        [...opt].map(o => o.id = "car-type");
        select.addEventListener("change", (e) => {
            let options = (<HTMLElement>e.target).getElementsByTagName("option");
            for(let i=0; i<options.length; i++) {
                if(options[i].selected === true) {
                    this.formFor(options[i], select);
                }
            }
        });
        (<HTMLSelectElement>select).id = "animals";
        (<HTMLSelectElement>select).name = "animals";
        select.classList.add("form-control");
        select.style.borderRadius = "5px";
        form.appendChild(select);

        // Create set of buttons
        let control = HTMLGenerator.createButtonControl("Submit", "edit", "delete");
        let buttons = (<HTMLElement>control).getElementsByTagName("button");
        for(let i=0; i<buttons.length; i++) {
            buttons[i].addEventListener("click", (e) => {
                this.actionFor(e);
            });
        }

        form.appendChild(control);

        var positioner = document.createElement("div");
        positioner.id = "create-form-wrapper";
    
        positioner.appendChild(form); 
        document.body.appendChild(positioner);    
    }
    public search(event: Event) {

        let wrapper = document.getElementById("table-wrapper");
        let trs = [...wrapper.getElementsByTagName("tr")];


        trs.forEach(tr => {

            let tds = [...tr.getElementsByTagName("td")];

            for(let i=0; i<tds.length; i++) {

                if(tds[i].innerHTML.match((<HTMLInputElement>event.target).value) === null) {

                    tr.setAttribute("hidden", "true");
                }
                else {

                    tr.removeAttribute("hidden");
                    break;
                }
            }
            
        }); 
    }
    private formFor(option:HTMLOptionElement, control:HTMLElement): void {

        switch(option.value)
        {
            case "auto":
                var input = HTMLGenerator.createInputSelectControl("Cantidad de puertas",[["2",2], ["3",3], ["4",4], ["5",5]], "Seleccione cantidad de puertas . . .", "car-doors", "car-doors");
                var opt = input.getElementsByTagName("option");
                [...opt].map(o => o.id = "car-doors");
                
                control.appendChild(input);
            break;

            case "camioneta":
                var input = HTMLGenerator.createInputSelectControl("4 x 4",[["SI",true], ["NO",false]], "Es 4 x 4 ? . . .", "cuatroXcuatro", "cuatroXcuatro");
                var opt = input.getElementsByTagName("option");
                [...opt].map(o => o.id = "cuatroXcuatro");
                input.id = "isForByFor";
                control.appendChild(input);
            break;

        }
    }
    private actionFor(event: Event): void {

        var options = document.getElementsByTagName("option");
        
        for(let i=0; i<options.length; i++) {

            if(options[i].selected === true) {

                switch((<HTMLButtonElement>event.target).value + "-" + options[i].value)
                {
                    case "submit-auto":

                        let brand = document.getElementById("vehicle-brand").getElementsByTagName("input")[0].value;
                        let model = document.getElementById("vehicle-model").getElementsByTagName("input")[0].value;
                        let price = document.getElementById("vehicle-price").getElementsByTagName("input")[0].value;
                        let type = [...document.getElementById("car-type").getElementsByTagName("option")].filter(o => o.selected === true && o.id === "car-type")[0].value;
                        let doors = [...document.getElementById("car-doors").getElementsByTagName("option")].filter(o => o.selected === true && o.id === "car-doors")[0].value;

                        console.log(brand, model, price, type, doors);


                        this.lastId = (this.lastId +1);

                        this.Add(new Auto(this.lastId, brand, model, parseInt(price), parseInt(doors)));

                        

                        let oldGrid = document.getElementById("table-wrapper").getElementsByTagName("table")[0];

                        if(oldGrid !== null && oldGrid !==  undefined){
                            oldGrid.parentNode.removeChild(oldGrid);

                        }

                        let newGrid = document.getElementById("table-wrapper");
                        newGrid.appendChild(this.toGrid());

                        this.rocket();

                    break;
        
                    case "submit-camioneta":
                        let brand2 = document.getElementById("vehicle-brand").getElementsByTagName("input")[0].value;
                        let model2 = document.getElementById("vehicle-model").getElementsByTagName("input")[0].value;
                        let price2 = document.getElementById("vehicle-price").getElementsByTagName("input")[0].value;
                        let type2 = [...document.getElementById("car-type").getElementsByTagName("option")].filter(o => o.selected === true && o.id === "car-type")[0].value;
                        let cuatroXcuatro = [...document.getElementById("isForByFor").getElementsByTagName("option")].filter(o => o.selected === true && o.id === "cuatroXcuatro")[0].value;

                        console.log(brand2, model2, price2, type2, cuatroXcuatro);


                        this.lastId = (this.lastId +1);

                        this.Add(new Camioneta(this.lastId, brand2, model2, parseInt(price2), (cuatroXcuatro === "true")));

                        

                        let oldGrid2 = document.getElementById("table-wrapper").getElementsByTagName("table")[0];

                        if(oldGrid2 !== null && oldGrid2 !==  undefined){
                            oldGrid2.parentNode.removeChild(oldGrid2);

                        }

                        let newGrid2 = document.getElementById("table-wrapper");
                        newGrid2.appendChild(this.toGrid());

                        this.rocket();

                    break;
        

                }            
            }
        }
    }
    private rocket() {

        var form = document.getElementById("create-form-wrapper");

        if (form) {
            form.addEventListener("animationend", this.destroy, false);
            form.style.animation = "rocket 0.5s ease-out";
        }
    }
    private destroy() {

        var elem = document.getElementById("create-form-wrapper");
        elem.parentNode.removeChild(elem);
    }
}