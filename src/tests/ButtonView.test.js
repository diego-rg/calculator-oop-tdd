import { Button } from "../components/models/Button";
import { ButtonView } from "../components/views/ButtonView";

describe('Button01 - Create a new button view', () => {
    test('01 Button - It must return a new button view object', () => {
        const button = new Button("x");
        const buttonView = new ButtonView(button);
        expect(buttonView && typeof buttonView === 'object').toBe(true);
    });
});