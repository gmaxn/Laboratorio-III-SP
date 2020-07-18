export default class HTMLGenerator {

    public static createButtonControl(...buttons:string[]) {
        let control = document.createElement("div");
        control.style.border = "1px solid black";
        control.style.borderStyle = "dashed";
        control.style.borderRadius = "5px";
        control.style.margin = "5px";
        control.style.marginTop = "25px";

        buttons.forEach(btnName => {
            let button = document.createElement("button");
            button.appendChild(document.createTextNode(btnName));
            button.value = btnName.toLowerCase();
            button.style.border = "1px solid black";
            button.style.borderStyle = "dashed";
            button.style.borderRadius = "5px";
            button.style.margin = "5px";
            button.style.padding = "5px";
            control.appendChild(button);
        });
        return control;
    }

    public static createInputTextControl(title: string, placeholder: string, disabled: boolean = false): HTMLElement {

        // Create control container
        var control = document.createElement("div");
        control.classList.add("input-text-control");
    
        // Create control label
        var label = document.createElement("label");
        label.appendChild(document.createTextNode(this.capitalizeFLetter(title) + ":"));
        label.classList.add("mr-sm-2");
    
        // Create control input
        var input = document.createElement("input");
        input.disabled = disabled;
        input.placeholder = placeholder;
        input.classList.add("form-control");
        input.classList.add("mb-2");
        input.classList.add("mr-sm-2");
      
        control.appendChild(label);
        control.appendChild(input);
        return control;
    }

    public static createInputSelectControl(title: string, options:[string, any][], placeHolder:string = null, id:string, name:string): HTMLElement {

        // Create control container
        var control = document.createElement("div");
        control.classList.add("input-text-control");

        // Create control label
        var label = document.createElement("label");
        label.htmlFor = title.toLowerCase();
        label.appendChild(document.createTextNode(this.capitalizeFLetter(title) + ":"));
        label.classList.add("mr-sm-2");

        // Create select input
        var select = document.createElement("select");
        select.id = id;
        select.name = name;
        select.classList.add("form-control");
        select.style.borderRadius = "5px";

        // Create place holder
        if(placeHolder)
        {
            let option = document.createElement("option");
            option.value = "";
            option.setAttribute("selected", "true");
            option.setAttribute("disabled", "true");
            option.setAttribute("hidden", "true");
            option.appendChild(document.createTextNode(this.capitalizeFLetter(placeHolder)));
            select.appendChild(option);
        }


        options.forEach(o => {
            // Create option1 input
            var option = document.createElement("option");
            option.value = o[1];
            option.appendChild(document.createTextNode(this.capitalizeFLetter(o[0])));
            select.appendChild(option);
        });

        control.appendChild(label);
        control.appendChild(select);

        return control;
    }

    public static capitalizeFLetter(string) {

        var normalized = string.toLowerCase();
        return normalized[0].toUpperCase() + normalized.slice(1);
    }

}
export { HTMLGenerator };