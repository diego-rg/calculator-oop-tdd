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

class Numeric extends Button {
    // Number if the button is numeric
    // @type {number}
    #value;

    // Getters and Setters
    get value() {
        return this.#value;
    }

    constructor(text) {
        super(text);
        this.#value = Number(text);
    }
}

export { Button, Numeric };