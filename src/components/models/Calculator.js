import { Button } from "./Button";
import { Screen } from "./Screen";

class Calculator {
    /**
    * Array that contains all text values for the buttons
    * @type {Array<String>}
    */
    #text = ["C", "+", "-", "x", "/", "%", "=", ".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    /**
    * Array that contains all button objects
    * @type {Array<Button>}
    */
    #buttons;

    /**
    * Object that contains the data written
    * @type {Object<Screen>}
    */
    #screen;

    /**
    * String that represents the current number/operand
    * @type {String}
    */
    #currentOperand = null;

    /**
    * String that represents the previous number/operand
    * @type {String}
    */
    #previousOperand = null;

    /**
    * String that represents the current operator selected
    * @type {String}
    */
    #operator = null;

    /**
    * String that represents the result of an operation
    * @type {String}
    */
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

    // Observer pattern to update the data displayed on the screen
    /**
    * Adds a new observer
    * @param {Object} observer - Object or observer to be notified
    */
    addObserver(observer) {
        this.observers.push(observer);
    }

    /**
    * Notifies the observer
    * @param {Object} data - Data sent to the observer
    */
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }

    /**
    * Starts the calculator: creates all Button and Screen objects
    */
    init() {
        const newCalculator = [];
        this.#text.forEach(text => newCalculator.push(new Button(this, text)));
        this.#buttons = newCalculator;
        console.info("Calculator model created");

        this.#screen = new Screen(this, "");
    }

    /**
    * Writes the inputs of the user on the screen, preventing him to use several "." in the same number
    * @param {String} data - String that represents the button clicked by the user
    */
    writeData(data) {
        if (this.#screen.text.length) {
            if (data === "." && this.#screen.text.includes(".")) {
                return;
            }
        }
        this.#screen.text += data;
        this.#currentOperand = this.#screen.text;
        this.notify();
    }

    /**
    * Sets the current operator and the operands when the user clicks a operation button
    * If there are no operands, does nothing. If both operads exist, performs the calculation
    * @param {String} operator - String that represents the button clicked by the user
    */
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
    }

    /**
    * Clears all data on the screen and operands/operator/result to avoid bugs
    */
    clearScreen() {
        this.#screen.text = "";
        this.resetCalculator();
        this.notify();
    }

    /**
    * Clears operands/operator/result to avoid bugs
    */
    resetCalculator() {
        this.#currentOperand = null;
        this.#previousOperand = null;
        this.#operator = null;
        this.#result = null;
    }

    /**
    * Performs the chosen operation if the operands and operator exists
    * Resets the data but keeps the result on the screen and as currentOperator
    */
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