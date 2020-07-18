import { HTMLGenerator } from "./../utils/html-generator.js";
class PetForm {
    constructor() { }
    generate() {
        var form = document.createElement("div");
        form.id = "create-form";
        var title = document.createElement("p");
        title.innerHTML = "Create your pet";
        title.className = "form-title";
        form.appendChild(title);
        var name = HTMLGenerator.createInputTextControl("Name", "Enter a name . . .");
        form.appendChild(name);
        // Create select input
        var select = HTMLGenerator.createInputSelectControl("Choose a Type", ["Catto", "Doggo", "Birdo"], "Select a specie . . .");
        select.id = "animals";
        select.name = "animals";
        select.classList.add("form-control");
        select.style.borderRadius = "5px";
        select.addEventListener("change", (e) => {
            let target = e.target;
            let options = target.getElementsByTagName("option");
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected === true) {
                    this.formFor(options[i], select);
                }
            }
        });
        form.appendChild(select);
        // var select = this.createSelectInputControl("Choose a type", "Enter your pet . . .", false);
        // form.appendChild(select);
        var buttonWrap = document.createElement("div");
        buttonWrap.className = "btn-group btn-small";
        var positioner = document.createElement("div");
        positioner.id = "create-form-wrapper";
        positioner.appendChild(form);
        document.body.appendChild(positioner);
        var main = document.getElementById("main-screen");
    }
    formFor(option, control) {
        switch (option.value) {
            case "Catto":
                var input = HTMLGenerator.createInputSelectControl("Lives", ["1", "2", "3", "4", "5", "6", "7"], "Quantity");
                control.appendChild(input);
                break;
            case "Doggo":
                var input = HTMLGenerator.createInputTextControl("Breed", "Enter a breed . . .");
                control.appendChild(input);
                break;
            case "Birdo":
                break;
        }
    }
}
export { Form };
//# sourceMappingURL=form.js.map