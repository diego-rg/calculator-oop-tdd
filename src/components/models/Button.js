class Button {
    /**
     * String that represents the button
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

    constructor(calculator, text) {
        this.#calculator = calculator;
        this.#text = text;
    }
}

export { Button };