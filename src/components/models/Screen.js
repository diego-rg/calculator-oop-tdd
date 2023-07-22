class Screen {
    /**
    * String that holds the text in the screen
    * @type {String}
    */
    #text;

    /**
    * Calculator object
    * @type {Calculator}
    */
    #calculator;

    // Getters and Setters
    get text() {
        return this.#text;
    }

    set text(text) {
        this.#text = text;
    }

    constructor(calculator, text) {
        this.#calculator = calculator;
        this.#text = text;
    }
}

export { Screen };