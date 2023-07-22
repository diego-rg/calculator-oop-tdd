class ButtonView {
    #buttonModel;

    // Element of the dom, a button
    #element;

    // Getters and Setters
    get element() {
        return this.#element;
    }

    // Takes the model of a button object as argument
    constructor(buttonModel) {
        this.#buttonModel = buttonModel;
    }

    render() {
        const newButton = document.createElement("button");
        newButton.innerText = this.#buttonModel.text;
        this.#element = newButton;
        this.#element.view = this; // Return the dom element
        console.info("Button view created!!!");
        return this;
    }
}

export { ButtonView };