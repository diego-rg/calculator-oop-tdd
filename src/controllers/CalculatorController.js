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
        switch (event.target.innerText) {
            case "C":
                this.#calculatorModel.clearScreen();
                break;

            case "=":
                this.#calculatorModel.calculate();
                break;

            case "+":
            case "-":
            case "x":
            case "/":
            case "%":
                this.#calculatorModel.writeOperation(event.target.innerText);
                break;

            default:
                this.#calculatorModel.writeData(event.target.innerText);
                break;
        }
    };

    redraw() {
        this.#calculatorView.redraw();
        this.registerEvents();
    }

    update() {
        this.redraw();
    }
}
export { CalculatorController };