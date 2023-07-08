class Button {
    constructor(text) {
        this.text = text;
    }
}

class Numeric extends Button {
    constructor(text) {
        super(text);
        this.value = Number(text);
    }
}

export { Button, Numeric };