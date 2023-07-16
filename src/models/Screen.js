class Screen {
    // String that represents what is shown on the screen
    // @type {string}
    #text;
    #calculator;

    // Getters and Setters
    get text() {
        return this.#text;
    }

    constructor(calculator, text) {
        this.#calculator = calculator;
        this.#text = text;
    }
}

export { Screen };