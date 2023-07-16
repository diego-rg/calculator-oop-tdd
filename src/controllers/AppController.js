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
        new CalculatorController(this.#calculator);
        console.info("Calculator controller initialized!!!");
    }
}

const init = () => new AppController();

export { init };