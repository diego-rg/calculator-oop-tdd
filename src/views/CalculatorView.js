import { ButtonView } from "./ButtonView";
import { ScreenView } from "./ScreenView";

class CalculatorView {
    #buttonsViews = [];
    #screenView;
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

        this.#screenView = new ScreenView(this.#calculatorModel.screen);
    }

    render() {
        this.createViews();

        const divScreen = document.getElementById("screenContainer");
        divScreen.append(this.#screenView.render().element);


        const divButtons = document.getElementById("buttonsContainer");
        this.#buttonsViews.forEach(view => {
            divButtons.append(view.render().element);
        });
        console.info("Calculator view created!!!");
        return this;
    }
}

export { CalculatorView };