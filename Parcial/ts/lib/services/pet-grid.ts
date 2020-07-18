import { HTMLGenerator } from "./html-generator.js";
import { Grid } from "./grid.js";
import { Mascota } from "../models/mascota.js";
import { Gato } from "../models/gato.js";
import { Perro } from "../models/perro.js";
import { Pajaro } from "../models/pajaro.js";
import { ColBinder } from "./col-binder.js";

export class PetGrid extends Grid<Mascota> {

    constructor(...cols:ColBinder[]) {
        super(cols)
    }

    public generate(): void {

        // Create form title
        var form = document.createElement("div");
        var title = document.createElement("p");
        title.innerHTML = "Create your pet";
        title.className = "form-title";
        form.id = "create-form";
        form.appendChild(title);

        // Create input name
        var name = HTMLGenerator.createInputTextControl("Name", "Give your pet a name . . .");
        name.id = "pet-name"
        form.appendChild(name);

        // Create rest of the form based on type
        var select = HTMLGenerator.createInputSelectControl("Choose a Type", [["Catto", "catto"], ["Doggo","doggo"], ["Birdo","birdo"]], "Select a specie . . .", "", "");
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
            case "catto":
                var input = HTMLGenerator.createInputSelectControl("Lives", [["1", 1], ["2",2], ["3",3], ["4",4], ["5",5], ["6",6], ["7",7]], "Select number of lives . . .", "animals", "animals");
                input.id = "pet-lives";
                control.appendChild(input);
            break;

            case "doggo":
                var input = HTMLGenerator.createInputTextControl("Breed", "Enter a breed . . .");
                input.id = "pet-breed";
                control.appendChild(input);
            break;

            case "birdo":
                var input = HTMLGenerator.createInputSelectControl("eTipo", [["Loro", 2], ["Rapiña",1]], "Select a bird type . . .", "animals", "animals");
                input.id = "pet-eType";
                control.appendChild(input);
            break;
        }
    }
    private editformFor(e:Event): void {

        console.log(e);
        // switch(option.getAttribute("classType"))
        // {
        //     case "catto":
        //         var input = HTMLGenerator.createInputSelectControl("Lives", [["1", 1], ["2",2], ["3",3], ["4",4], ["5",5], ["6",6], ["7",7]], "Select number of lives . . .");
        //         input.id = "pet-lives";
        //         control.appendChild(input);
        //     break;

        //     case "doggo":
        //         var input = HTMLGenerator.createInputTextControl("Breed", "Enter a breed . . .");
        //         input.id = "pet-breed";
        //         control.appendChild(input);
        //     break;

        //     case "birdo":
        //         var input = HTMLGenerator.createInputSelectControl("eTipo", [["Loro", 2], ["Rapiña",1]], "Select a bird type . . .");
        //         input.id = "pet-eType";
        //         control.appendChild(input);
        //     break;
        // }
    }
    private actionFor(event: Event): void {

        var options = document.getElementsByTagName("option");
        
        for(let i=0; i<options.length; i++) {

            if(options[i].selected === true) {

                switch((<HTMLButtonElement>event.target).value + "-" + options[i].value)
                {
                    case "submit-catto":

                        let name = document.getElementById("pet-name").getElementsByTagName("input")[0].value;
                        let type = options[i].value;
                        let options2 = document.getElementById("pet-lives").getElementsByTagName("option");
                        let lives;

                        for(let i=0; i<options2.length; i++) {
                            if(options2[i].selected === true) {
                                lives = options2[i].value;
                            }
                        }

                        this.Add(new Gato(name, lives));

                        let oldGrid = document.getElementById("table-wrapper").getElementsByTagName("table")[0];
                        oldGrid.parentNode.removeChild(oldGrid);

                        let newGrid = document.getElementById("table-wrapper");
                        newGrid.appendChild(this.toGrid());

                        this.rocket();

                    break;
        
                    case "submit-doggo":
                        let doggoname = document.getElementById("pet-name").getElementsByTagName("input")[0].value;
                        let animalType = options[i].value;
                        let doggobreed = document.getElementById("pet-breed").getElementsByTagName("input")[0].value;

                        this.Add(new Perro(doggoname, doggobreed));

                        let oldGrid2 = document.getElementById("table-wrapper").getElementsByTagName("table")[0];
                        oldGrid2.parentNode.removeChild(oldGrid2);

                        let newGrid2 = document.getElementById("table-wrapper");
                        newGrid2.appendChild(this.toGrid());

                        this.rocket();

                    break;
        
                    case "submit-birdo":

                        let birdoname = document.getElementById("pet-name").getElementsByTagName("input")[0].value;
                        let animalType3 = options[i].value;
                        let birdoType:any = document.getElementById("pet-eType").getElementsByTagName("option");
                        for(let i=0; i<birdoType.length; i++) {
                            if(birdoType[i].selected === true) {
                                birdoType = birdoType[i].value;
                            }
                        }

                        this.Add(new Pajaro(birdoname, +birdoType));

                        let oldGrid3 = document.getElementById("table-wrapper").getElementsByTagName("table")[0];
                        oldGrid3.parentNode.removeChild(oldGrid3);

                        let newGrid3 = document.getElementById("table-wrapper");
                        newGrid3.appendChild(this.toGrid());

                        var elem = document.getElementById("create-form-wrapper");
                        elem.parentNode.removeChild(elem);

                        //this.rocket();
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