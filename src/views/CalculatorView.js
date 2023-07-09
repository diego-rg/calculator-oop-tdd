import { ButtonView } from "./ButtonView";

class CalculatorView {
    #buttonsViews = [];
    #calculatorModel;

    constructor(calculatorModel) {
        this.#calculatorModel = calculatorModel;
    }

    // Getters and Setters
    get buttonViews() {
        return this.#buttonsViews;
    }

    createViews() {
        this.#calculatorModel.buttons.forEach(button => {
            this.#buttonsViews.push(new ButtonView(button));
        });
        console.info("Button views created!!!");
    }

    render() {
        this.createViews();

        const divButtons = document.getElementById("buttons");
        this.#buttonsViews.forEach(view => {
            divButtons.append(view.render().element);
        });
        console.info("Calculator view created!!!");
        return this;
    }
}

export { CalculatorView };