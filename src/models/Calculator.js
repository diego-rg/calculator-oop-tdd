import { Button, Numeric } from "./Button";
import { Screen } from "./Screen";

class Calculator {
    // Array that contains all text values for the buttons
    #nonNumericText = ["C", "+", "-", "x", "/", "%", "=", "."];
    #numericText = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    // Array that contains all button objects
    // @type {array<Numeric || Button>}
    #buttons;

    // Object that contains the data written
    #screen;

    // Getters and Setters
    get buttons() {
        return this.#buttons;
    }

    get screen() {
        return this.#screen;
    }

    constructor() {
        this.observers = [];
        this.init();
    }

    // Observer patter to update the displayed data
    addObserver(observer) {
        this.observers.push(observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }

    //Starts the calculator
    init() {
        const newCalculator = [];
        this.#nonNumericText.forEach(text => newCalculator.push(new Button(text)));
        this.#numericText.forEach(text => newCalculator.push(new Numeric(text)));
        this.#buttons = newCalculator;
        console.info("Calculator created!!!");

        this.#screen = new Screen(this, "hello world!!!");
    }

    writeData(data) {
        this.#screen.text += data;
        this.notify(data);
    }
}

export { Calculator };