class Button {
    // String that represents the button
    // @type {string}
    #text;

    // Getters and Setters
    get text() {
        return this.#text;
    }

    constructor(text) {
        this.#text = text;
        console.info("Button created!!!");
    }
}

export { Button };