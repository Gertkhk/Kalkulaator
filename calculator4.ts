class Calculator {
    private panelContents: string = "";

    pressButton(b: string): void {
        if (b === "C") {
            this.panelContents = "";
        } else if (b === "=") {
            const parts = this.panelContents.split("X");
            if (parts.length === 2) {
                const num1 = parseFloat(parts[0]);
                const num2 = parseFloat(parts[1]);
                const result = num1 * num2;
                this.panelContents = `${result}=`;
            }
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
}

export { Calculator };