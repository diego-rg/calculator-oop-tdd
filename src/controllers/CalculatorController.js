import { Calculator } from "../models/Calculator";
import { CalculatorView } from "../views/CalculatorView";

class CalculatorController {
    #calculator;

    constructor() {
        this.createModels();
        this.createViews();
    }

    createModels() {
        this.#calculator = new Calculator();
    }

    createViews() {
        this.CalculatorView = new CalculatorView(this.#calculator);
    }
}

const init = () => new CalculatorController();

export { init };