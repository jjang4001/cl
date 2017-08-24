export class OutputParser {
  constructor(commandOutput) {
    this.commandOutput = commandOutput;
  }

  result() {
  	return this.commandOutput;
  }
}