import { ScreenView } from "../views/ScreenView";

class ScreenController {
    #screenView;
    #calculatorModel;

    constructor(calculatorModel) {
        this.#calculatorModel = calculatorModel;
        this.#screenView = new ScreenView(this.#calculatorModel);
        this.#screenView.render();
    }
}
export { ScreenController };