import { Calculator } from "../models/Calculator";
import { CalculatorController } from "./CalculatorController";

class AppController {
    #calculator;

    constructor() {
        this.createModel();
        this.createController();
        console.info("App controller initialized!!!");
    }

    createModel() {
        this.#calculator = new Calculator();
        console.info("Model initialized!!!");
    }

    createController() {
        const calculatorController = new CalculatorController(this.#calculator);
        this.#calculator.addObserver(calculatorController);
        console.info("Calculator controller initialized!!!");
        calculatorController.registerEvents();
    }
}

const init = () => new AppController();

export { init };