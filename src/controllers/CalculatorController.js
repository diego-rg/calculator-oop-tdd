import { CalculatorView } from "../views/CalculatorView";

class CalculatorController {
    #calculatorView;
    #calculatorModel;

    constructor(calculatorModel) {
        this.#calculatorModel = calculatorModel;
        this.#calculatorView = new CalculatorView(this.#calculatorModel);
        this.#calculatorView.render();
    }

    registerEvents() {
        this.#calculatorView.buttonsViews.forEach(view => {
            view.element.addEventListener("click", this.onClickButton);
        });
    }

    onClickButton = (event) => {
        this.#calculatorModel.writeData(event.target.innerText);
    };

    redraw() {
        this.#calculatorView.render();
        this.registerEvents();
    }

    update() {
        this.redraw();
    }
}
export { CalculatorController };