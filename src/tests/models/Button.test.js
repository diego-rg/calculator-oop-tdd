import { Button } from "../../components/models/Button";
import { Calculator } from "../../components/models/Calculator";

describe('Button - Create buttons', () => {
    test('Button01: Success - It must return a new button object with a certain string which represents the button', () => {
        const calculator = new Calculator();
        const button = new Button(calculator, "C");
        expect(button.text).toBe("C");
    });

    test('Button02: Error - It must throw a error when we try to create a new Button object without arguments', () => {
        expect(() => new Button().toThrow(Error));
    });
});