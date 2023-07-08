import { Button, Numeric } from "./Button";

class Calculator {
    // Array who contains all text values for the buttons
    #numericText = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    #nonNumericText = ["C", "DEL", "+", "-", "x", "/", "%", "=", "."];

    // Array who contains all button objects
    // @type {array<Numeric || Action>}
    #buttons = null;

    // Getters and Setters
    get buttons() {
        return this.#buttons;
    }

    constructor() {
        const newCalculator = [];
        this.#numericText.forEach(text => newCalculator.push(new Numeric(text)));
        this.#nonNumericText.forEach(text => newCalculator.push(new Button(text)));
        this.#buttons = newCalculator;
    }
}

export { Calculator };