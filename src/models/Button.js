class Button {
    // String that represents the button
    // @type {string}
    #text;

    constructor(text) {
        this.#text = text;
        console.info("Button created!!!");
    }

    // Getters and Setters
    get text() {
        return this.#text;
    }
}

class Numeric extends Button {
    constructor(text) {
        super(text);
        this.value = Number(text);
    }
}

export { Button, Numeric };