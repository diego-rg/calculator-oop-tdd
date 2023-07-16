import { ScreenView } from "./ScreenView";
import { Screen } from "../models/Screen";

describe('ScreenView01 - Create a new screen view', () => {
    test('01 ScreenView - It must create the screen view object', () => {
        const screen = new Screen("helloooo");
        const screenView = new ScreenView(screen);
        expect(screenView && typeof screenView === 'object').toBe(true);
    });
});