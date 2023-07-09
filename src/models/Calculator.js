import { Button, Numeric } from "./Button";

class Calculator {
    // Array that contains all text values for the buttons
    #nonNumericText = ["C", "DEL", "+", "-", "x", "/", "%", "=", "."];
    #numericText = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    // Array that contains all button objects
    // @type {array<Numeric || Button>}
    #buttons;

    // Getters and Setters
    get buttons() {
        return this.#buttons;
    }

    constructor() {
        const newCalculator = [];
        this.#nonNumericText.forEach(text => newCalculator.push(new Button(text)));
        this.#numericText.forEach(text => newCalculator.push(new Numeric(text)));
        this.#buttons = newCalculator;
        console.info("Calculator created!!!");
    }
}

export { Calculator };