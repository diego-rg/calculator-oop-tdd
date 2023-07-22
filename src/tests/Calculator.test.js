import { Calculator } from "../components/models/Calculator";

describe('Calculator01 - Create a new calculator', () => {
    test('01 Calculator - It must return a new calculator object with a property buttons which is an 18 item array', () => {
        const calculator = new Calculator();
        expect(calculator.buttons.length).toBe(18);
    });

    test('02 Calculator - It must return a new calculator object with a property buttons, whose 10th object has a text property with the value "1"', () => {
        const calculator = new Calculator();
        expect(calculator.buttons[9].text).toBe("1");
    });
});