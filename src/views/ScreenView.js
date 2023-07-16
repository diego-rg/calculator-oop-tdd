class ScreenView {
    #screenModel;
    #element;

    // Getters and Setters
    get element() {
        return this.#element;
    }

    // Takes the model of a button object as argument
    constructor(screenModel) {
        this.#screenModel = screenModel;
    }

    render() {
        const newScreen = document.createElement("input");
        newScreen.type = "text";
        newScreen.name = "screen";
        newScreen.value = this.#screenModel.text;
        newScreen.readOnly = true;
        this.#element = newScreen;
        this.#element.view = this; // Return the dom element
        console.info("Screen view created!!!");
        return this;
    }
}

export { ScreenView };