import { Button, Numeric } from "./Button";

describe('Buttons01 - Create buttons', () => {
    test('01 Button - It must return a new button object with a certain string which represents the button', () => {
        const button = new Button("C");
        expect(button.text).toBe("C");
    });

    test('02 Numeric - It must return a new button object with a value property', () => {
        const button = new Numeric("9");
        expect(button.value).toBe(9);
    });
});