import { CalculatorView } from "../views/CalculatorView";

class CalculatorController {
    #calculatorView;
    #calculatorModel;

    constructor(calculatorModel) {
        this.#calculatorModel = calculatorModel;
        this.#calculatorView = new CalculatorView(this.#calculatorModel);
        this.#calculatorView.render();
    }
}
export { CalculatorController };