import { ButtonView } from "./ButtonView";

class CalculatorView {
    #buttonsViews = [];
    #calculatorModel;

    constructor(calculatorModel) {
        this.#calculatorModel = calculatorModel;
    }

    createViews() {
        this.#calculatorModel.buttons.forEach(button => {
            this.#buttonsViews.push(new ButtonView(button));
        });
    }

    render() {
        this.createViews();

        const divButtons = document.getElementById(buttons);
        this.#buttonsViews.forEach(view => {
            divButtons.appendChild(view.render().element);
        });
        return this;
    }
}

export { CalculatorView };