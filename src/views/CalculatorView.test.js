import { Calculator } from "../models/Calculator";
import { CalculatorView } from "./CalculatorView";

describe('CalculatorView01 - Create a new calculator view', () => {
    test('01 CalculatorView - It must create the button views Array to render', () => {
        const calculator = new Calculator();
        const calculatorView = new CalculatorView(calculator);
        calculatorView.createViews();
        expect(calculatorView.buttonViews.length).toBe(19);
    });
});