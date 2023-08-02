interface CalculatorDisplay {
  result: number;
}

abstract class OperationCommand {
  calculatorDisplay: CalculatorDisplay;
  operand_1: number;
  operand_2: number;

  constructor(
    calculatorDisplay: CalculatorDisplay,
    operand_1: number,
    operand_2: number
  ) {
    this.calculatorDisplay = calculatorDisplay;
    this.operand_1 = operand_1;
    this.operand_2 = operand_2;
  }

  abstract execute(): void;
  abstract undo(): void;
}

class PlusCommand extends OperationCommand {
  execute() {
    this.calculatorDisplay.result += this.operand_1 + this.operand_2;
  }
  undo() {
    this.calculatorDisplay.result -= this.operand_1 + this.operand_2;
  }
}
class MinusCommand extends OperationCommand {
  execute() {
    this.calculatorDisplay.result += this.operand_1 - this.operand_2;
  }
  undo() {
    this.calculatorDisplay.result -= this.operand_1 - this.operand_2;
  }
}
class MultiplicationCommand extends OperationCommand {
  execute() {
    this.calculatorDisplay.result += this.operand_1 * this.operand_2;
  }
  undo() {
    this.calculatorDisplay.result -= this.operand_1 * this.operand_2;
  }
}
class DivisionCommand extends OperationCommand {
  execute() {
    this.calculatorDisplay.result += this.operand_1 / this.operand_2;
  }
  undo() {
    this.calculatorDisplay.result -= this.operand_1 / this.operand_2;
  }
}
class CalculatorDisplay {
  result: number;

  constructor() {
    this.result = 0;
  }
}
class MathCalculator {
  operations: Array<
    PlusCommand | MinusCommand | MultiplicationCommand | DivisionCommand
  >;
  constructor() {
    this.operations = [];
  }

  operation(
    calculatorDisplay: CalculatorDisplay,
    operand_1: number,
    operand_2: number,
    operator: string
  ) {
    let Command =
      operator === '+'
        ? PlusCommand
        : operator === '-'
        ? MinusCommand
        : operator === '*'
        ? MultiplicationCommand
        : DivisionCommand;

    const command = new Command(calculatorDisplay, operand_1, operand_2);

    command.execute();

    this.operations.push(command);
  }

  undo(count: number) {
    for (let i = 0; i < count; ++i) {
      const command = this.operations.pop();

      if (command) {
        command.undo();
      }
    }
  }
}

export { MathCalculator, CalculatorDisplay };
