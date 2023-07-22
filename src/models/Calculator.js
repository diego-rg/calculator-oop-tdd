import { Button } from "./Button";
import { Screen } from "./Screen";

class Calculator {
    // Array that contains all text values for the buttons
    // @type {array<String>}
    #text = ["C", "+", "-", "x", "/", "%", "=", ".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // Array that contains all button objects
    // @type {array<Button>}
    #buttons;

    // Object that contains the data written
    // @type {Object}
    #screen;

    #currentOperand = null;
    #previousOperand = null;
    #operator = null;
    #result = null;


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
        this.#text.forEach(text => newCalculator.push(new Button(text)));
        this.#buttons = newCalculator;
        console.info("Calculator created!!!");

        this.#screen = new Screen(this, "");
    }

    writeData(data) {
        if (this.#screen.text.length) {
            if (data === "." && this.#screen.text.includes(".")) {
                return;
            }
        }
        this.#screen.text += data;
        this.#currentOperand = this.#screen.text;

        console.log(this.#currentOperand);
        this.notify();
    }

    writeOperation(operator) {
        if (this.#currentOperand === "" || this.#currentOperand === null) {
            return;
        }
        if (this.#previousOperand !== "" && this.#previousOperand !== null) {
            this.calculate();
        }
        this.#operator = operator;
        this.#previousOperand = this.#currentOperand;
        this.#currentOperand = "";
        this.#screen.text = this.#currentOperand;
        // We dont update the view because we want to keep the previous number until we write the new one

        console.log(this.#operator);
        console.log(this.#currentOperand);
        console.log(this.#previousOperand);
    }

    clearScreen() {
        this.#screen.text = "";
        this.resetCalculator();
        this.notify();
    }

    resetCalculator() {
        this.#currentOperand = null;
        this.#previousOperand = null;
        this.#operator = null;
        this.#result = null;
    }

    calculate() {
        if (this.#currentOperand !== null &&
            this.#previousOperand !== null &&
            this.#operator !== null) {
            switch (this.#operator) {
                case "+":
                    this.#result = Number(this.#previousOperand) + Number(this.#currentOperand);
                    break;
                case "-":
                    this.#result = Number(this.#previousOperand) - Number(this.#currentOperand);
                    break;
                case "x":
                    this.#result = Number(this.#previousOperand) * Number(this.#currentOperand);
                    break;
                case "/":
                    this.#result = Number(this.#previousOperand) / Number(this.#currentOperand);
                    break;
                case "%":
                    this.#result = Number(this.#previousOperand) % Number(this.#currentOperand);
                    break;

                default:
                    break;
            }
            this.#screen.text = this.#result;
            this.resetCalculator();
            this.#currentOperand = this.#screen.text;
            this.notify();
        }
    }
}

export { Calculator };