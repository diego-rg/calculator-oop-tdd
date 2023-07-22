import { Calculator } from "../../components/models/Calculator";
import { Screen } from "../../components/models/Screen";

describe('Screen - Display text on the screen', () => {
    test('Screen01: Success - It must return a new screen object ', () => {
        const calculator = new Calculator();
        const screen = new Screen(calculator, "My number here");
        expect(screen.text).toBe("My number here");
    });

    test('Screen02: Error - It must throw a error when we try to create a new Screen object without arguments', () => {
        expect(() => new Button().toThrow(Error));
    });
});