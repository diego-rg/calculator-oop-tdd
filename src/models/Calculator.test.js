import { Calculator } from "./Calculator";

describe('Calculator01 - Create a new calculator', () => {
    test('01 Calculator - It must return a new calculator object with a property buttons which is an 19 item array', () => {
        const calculator = new Calculator();
        expect(calculator.buttons.length).toBe(19);
    });

    test('02 Calculator - It must return a new calculator object with a property buttons, whose 10th Numeric object has a value of 1', () => {
        const calculator = new Calculator();
        expect(calculator.buttons[9].value).toBe(1);
    });
});