import { Calculator } from "../models/Calculator";
import { CalculatorView } from "../views/CalculatorView";

class CalculatorController {
    #calculator;
    #calculatorView;

    constructor() {
        this.createModels();
        this.createViews();
        console.info("Controller initialized!!!");
    }

    createModels() {
        this.#calculator = new Calculator();
        console.info("Model initialized!!!");
    }

    createViews() {
        this.#calculatorView = new CalculatorView(this.#calculator);
        this.#calculatorView.render();
        console.info("Views initialized!!!");
    }
}

const init = () => new CalculatorController();

export { init };