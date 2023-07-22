import { Calculator } from "../components/models/Calculator";
import { CalculatorView } from "../components/views/CalculatorView";

describe('CalculatorView01 - Create a new calculator view', () => {
    test('01 CalculatorView - It must create the button views Array to render', () => {
        const calculator = new Calculator();
        const calculatorView = new CalculatorView(calculator);
        calculatorView.createViews();
        expect(calculatorView.buttonsViews.length).toBe(18);
    });
});