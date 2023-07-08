class ButtonView {
    #buttonModel;

    // Takes the model of a button object as argument
    constructor(buttonModel) {
        this.#buttonModel = buttonModel;
    }

    render() {
        const newButton = document.createElement("button");
        newButton.innerText = this.#buttonModel.text;
        return this;
    }
}

export { ButtonView };