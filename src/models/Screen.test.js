import { Screen } from "./Screen";

describe('Screen01 - Display text on the screen', () => {
    test('01 Screen - It must return a new screen object ', () => {
        const button = new Button("C");
        expect(button.text).toBe("C");
    });
});