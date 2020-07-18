import { HTMLGenerator } from "../utils/html-generator.js";
export class PetGrid {
    constructor() {
        this.list = new Array();
    }
    generate() {
        // Create form title
        var form = document.createElement("div");
        var title = document.createElement("p");
        title.innerHTML = "Create your pet";
        title.className = "form-title";
        form.id = "create-form";
        form.appendChild(title);
        // Create input name
        var name = HTMLGenerator.createInputTextControl("Name", "Give your pet a name . . .");
        form.appendChild(name);
        // Create rest of the form based on type
        var select = HTMLGenerator.createInputSelectControl("Choose a Type", [["Catto", "catto"], ["Doggo", "doggo"], ["Birdo", "birdo"]], "Select a specie . . .");
        select.addEventListener("change", (e) => {
            let options = e.target.getElementsByTagName("option");
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected === true) {
                    this.formFor(options[i], select);
                }
            }
        });
        select.id = "animals";
        select.name = "animals";
        select.classList.add("form-control");
        select.style.borderRadius = "5px";
        form.appendChild(select);
        // Create set of buttons
        let control = HTMLGenerator.createButtonControl("Submit", "edit", "delete");
        let buttons = control.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
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
    actionFor(event) {
        switch (event.target.value) {
            case "submit":
                console.log(event.target);
                break;
            case "edit":
                break;
            case "delete":
                break;
        }
    }
    formFor(option, control) {
        switch (option.value) {
            case "catto":
                var input = HTMLGenerator.createInputSelectControl("Lives", [["1", 1], ["2", 2], ["3", 3], ["4", 4], ["5", 5], ["6", 6], ["7", 7]], "Select number of lives . . .");
                control.appendChild(input);
                break;
            case "doggo":
                var input = HTMLGenerator.createInputTextControl("Breed", "Enter a breed . . .");
                control.appendChild(input);
                break;
            case "birdo":
                var input = HTMLGenerator.createInputSelectControl("eTipo", [["Loro", 1], ["Rapiña", 2]], "Select a bird type . . .");
                control.appendChild(input);
                break;
        }
    }
}
//# sourceMappingURL=pet-form.js.map