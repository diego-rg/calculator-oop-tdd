import { Button } from "./Button";

describe('Buttons01 - Create buttons', () => {
    test('01 Button - It must return a new button object with a certain string which represents the button', () => {
        const button = new Button("C");
        expect(button.text).toBe("C");
    });
});