import { Button } from "./Button";

describe('Button - Create buttons', () => {
    test('Button01: Success - It must return a new button object with a certain string which represents the button', () => {
        const button = new Button("C");
        expect(button.text).toBe("C");
    });

    test('Button02: Error - It must throw a error when we try to create a new Button object without arguments', () => {
        expect(() => new Button().toThrow(Error));
    });
});