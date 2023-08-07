interface CalculatorDisplay {
  result: number;
  intermediateResult: number;
}

abstract class OperationCommand {
  calculatorDisplay: CalculatorDisplay;
  operand_1: number;
  operand_2: number;

  constructor(
    calculatorDisplay: CalculatorDisplay,
    operand_1: string,
    operand_2: string
  ) {
    this.calculatorDisplay = calculatorDisplay;
    this.operand_1 = Number(operand_1);
    this.operand_2 = Number(operand_2);
  }

  abstract execute(): void;
}

class PlusCommand extends OperationCommand {
  execute() {
    this.calculatorDisplay.intermediateResult +=
      this.operand_1 + this.operand_2;
  }
}
class MinusCommand extends OperationCommand {
  execute() {
    this.calculatorDisplay.intermediateResult +=
      this.operand_1 - this.operand_2;
  }
}
class MultiplicationCommand extends OperationCommand {
  execute() {
    this.calculatorDisplay.intermediateResult +=
      this.operand_1 * this.operand_2;
  }
}
class DivisionCommand extends OperationCommand {
  execute() {
    this.calculatorDisplay.intermediateResult +=
      this.operand_1 / this.operand_2;
  }
  undo() {
    this.calculatorDisplay.result -= this.operand_1 / this.operand_2;
  }
}

class RemainderCommand extends OperationCommand {
  execute() {
    this.calculatorDisplay.intermediateResult +=
      this.operand_1 % this.operand_2;
  }
}
class CalculatorDisplay {
  result: number;
  intermediateResult: number;

  constructor() {
    this.result = 0;
    this.intermediateResult = 0;
  }

  setResult(result: number) {
    this.result = result;
  }
  getIntermediateResult() {
    return this.intermediateResult;
  }
  resetIntermediateResult() {
    this.intermediateResult = 0;
  }
}
class MathCalculator {
  operations: Array<
    | PlusCommand
    | MinusCommand
    | MultiplicationCommand
    | DivisionCommand
    | RemainderCommand
  >;
  constructor() {
    this.operations = [];
  }

  operation(
    calculatorDisplay: CalculatorDisplay,
    operand_1: string,
    operand_2: string,
    operator: string
  ) {
    let Command =
      operator === '+'
        ? PlusCommand
        : operator === '-'
        ? MinusCommand
        : operator === '*'
        ? MultiplicationCommand
        : operator === '%'
        ? RemainderCommand
        : DivisionCommand;

    const command = new Command(calculatorDisplay, operand_1, operand_2);

    command.execute();

    this.operations.push(command);
  }
}

export {
  MathCalculator,
  CalculatorDisplay,
  PlusCommand,
  MinusCommand,
  MultiplicationCommand,
  DivisionCommand,
  RemainderCommand,
};
