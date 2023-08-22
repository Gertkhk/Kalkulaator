class Calculator {
    private panelContents: string = "";

    pressButton(b: string): void {
        if (b === "C") {
            this.panelContents = "";
        } else if (b === "=") {
            this.calculateResult();
        } else {
            this.panelContents += b;
        }
    }

    getPanelContents(): string {
        if (this.panelContents.endsWith("=")) {
            return this.panelContents.slice(0, -1);
        }
        return this.panelContents;
    }

    private calculateResult(): void {
        const expression = this.panelContents;
        const operators = ["+", "-", "X", "/"];

        for (let operator of operators) {
            if (expression.includes(operator)) {
                const parts = expression.split(operator);
                if (parts.length === 2) {
                    const num1 = parseFloat(parts[0]);
                    const num2 = parseFloat(parts[1]);
                    let result: number;
                    switch (operator) {
                        case "+":
                            result = num1 + num2;
                            break;
                        case "-":
                            result = num1 - num2;
                            break;
                        case "X":
                            result = num1 * num2;
                            break;
                        case "/":
                            result = num1 / num2;
                            break;
                        default:
                            result = NaN;
                            break;
                    }
                    this.panelContents = `${result}=`;
                    return;
                }
            }
        }
    }
}

export { Calculator };