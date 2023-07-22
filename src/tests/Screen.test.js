import { Calculator } from "../components/models/Calculator";
import { Screen } from "../components/models/Screen";

describe('Screen01 - Display text on the screen', () => {
    test('01 Screen - It must return a new screen object ', () => {
        const calculator = new Calculator();
        const screen = new Screen(calculator, "My number here");
        expect(screen.text).toBe("My number here");
    });
});